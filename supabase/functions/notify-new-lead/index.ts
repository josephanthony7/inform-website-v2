// Supabase Edge Function — sends you an email when a new lead arrives.
//
// Deploy with:
//   supabase functions deploy notify-new-lead
//
// Then create a Database Webhook in your Supabase dashboard:
//   Dashboard → Database → Webhooks → Create
//   - Table: inbound_leads
//   - Events: INSERT
//   - Type: Supabase Edge Function
//   - Function: notify-new-lead
//
// Set these secrets:
//   supabase secrets set RESEND_API_KEY=re_xxxxx
//   supabase secrets set NOTIFY_EMAIL=jaron@informgrowth.com

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") || "jaron@informgrowth.com";

interface Lead {
  name: string;
  email: string;
  company: string | null;
  crm_stack: string | null;
  pain_point: string | null;
  message: string | null;
  source: string;
  created_at: string;
}

Deno.serve(async (req) => {
  const payload = await req.json();
  const lead: Lead = payload.record;

  const isBooking = lead.source === "prequal_booking";
  const subjectLine = isBooking
    ? `New booking lead: ${lead.name} at ${lead.company || "Unknown"}`
    : `New contact form: ${lead.name} at ${lead.company || "Unknown"}`;

  const lines = [
    `<h2>${isBooking ? "New Booking Lead" : "New Contact Form Submission"}</h2>`,
    `<p><strong>Name:</strong> ${lead.name}</p>`,
    `<p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>`,
    lead.company ? `<p><strong>Company:</strong> ${lead.company}</p>` : "",
    lead.crm_stack ? `<p><strong>CRM/Stack:</strong> ${lead.crm_stack}</p>` : "",
    lead.pain_point ? `<p><strong>Pain Point:</strong> ${lead.pain_point}</p>` : "",
    lead.message ? `<p><strong>Message:</strong><br/>${lead.message}</p>` : "",
    `<hr/>`,
    `<p style="color:#888;font-size:12px;">Source: ${lead.source} · ${lead.created_at}</p>`,
  ].filter(Boolean).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Inform Growth <leads@updates.informgrowth.com>",
      to: [NOTIFY_EMAIL],
      subject: subjectLine,
      html: lines,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
});

-- ============================================
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ============================================

-- 1. Create the inbound_leads table
create table if not exists public.inbound_leads (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text,
  crm_stack text,
  pain_point text,
  message text,
  source text not null default 'unknown'  -- 'prequal_booking' or 'contact_form'
);

-- 2. Enable Row Level Security
alter table public.inbound_leads enable row level security;

-- 3. Allow anonymous inserts only (no read/update/delete from the browser)
create policy "Allow anonymous inserts"
  on public.inbound_leads
  for insert
  to anon
  with check (true);

-- 4. (Optional) Index on email for dedup queries later
create index if not exists idx_inbound_leads_email on public.inbound_leads (email);

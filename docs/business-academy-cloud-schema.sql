-- Business Academy cloud progress, deploy ONLY to the academy's identified Supabase project.
-- No live database was selected or modified by this file.
create table if not exists public.business_academy_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  learning jsonb not null default '{"schema":1,"courses":{}}'::jsonb,
  legacy jsonb not null default '{}'::jsonb,
  revision bigint not null default 1,
  updated_at timestamptz not null default now(),
  constraint ba_progress_schema check (learning->>'schema' = '1' and jsonb_typeof(learning->'courses')='object')
);
alter table public.business_academy_progress enable row level security;
revoke all on public.business_academy_progress from anon;
grant select, insert, update on public.business_academy_progress to authenticated;
drop policy if exists ba_progress_select_self on public.business_academy_progress;
create policy ba_progress_select_self on public.business_academy_progress for select to authenticated using (user_id=(select auth.uid()));
drop policy if exists ba_progress_insert_self on public.business_academy_progress;
create policy ba_progress_insert_self on public.business_academy_progress for insert to authenticated with check (user_id=(select auth.uid()));
drop policy if exists ba_progress_update_self on public.business_academy_progress;
create policy ba_progress_update_self on public.business_academy_progress for update to authenticated using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));
-- Authenticated clients must use a revision compare-and-set filter for updates.
-- Never expose secret/service-role keys in browser scripts.

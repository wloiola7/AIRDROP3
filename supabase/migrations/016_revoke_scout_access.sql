begin;

update public.scout_api_keys
set is_active = false
where is_active;

update public.scout_access_sessions
set revoked_at = coalesce(revoked_at, now())
where revoked_at is null;

update public.scout_access_challenges
set used_at = coalesce(used_at, now())
where used_at is null;

commit;

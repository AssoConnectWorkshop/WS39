create table restaurants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  latitude float8,
  longitude float8,
  price_range int2 check (price_range between 1 and 4),
  seats int2,
  website text,
  opening_hours jsonb,
  created_at timestamptz not null default now()
);

create table cuisines (
  id serial primary key,
  name text not null unique
);

create table restaurant_cuisines (
  restaurant_id uuid not null references restaurants (id) on delete cascade,
  cuisine_id int not null references cuisines (id) on delete cascade,
  primary key (restaurant_id, cuisine_id)
);

alter table restaurants enable row level security;
alter table cuisines enable row level security;
alter table restaurant_cuisines enable row level security;

create policy "public read restaurants" on restaurants for select using (true);
create policy "public read cuisines" on cuisines for select using (true);
create policy "public read restaurant_cuisines" on restaurant_cuisines for select using (true);

insert into cuisines (name) values
  ('Française'),
  ('Italienne'),
  ('Japonaise'),
  ('Chinoise'),
  ('Indienne'),
  ('Mexicaine'),
  ('Libanaise'),
  ('Américaine'),
  ('Espagnole'),
  ('Thaïlandaise');

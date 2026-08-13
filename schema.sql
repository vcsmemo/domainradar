-- ============================================================
-- NicheDomainRadar · Cloudflare D1 Schema & Seed Data
-- ============================================================

CREATE TABLE IF NOT EXISTS domains (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  name                TEXT NOT NULL,              -- "superlabs.ai"
  masked_name         TEXT NOT NULL,              -- "s***bs.ai"
  tld                 TEXT NOT NULL,              -- ".ai"
  niche               TEXT NOT NULL,              -- "AI" | "SaaS" | "DevTools" | "Health" | "Finance"
  domain_age_years    INTEGER,                    -- 7
  dr_score            INTEGER,                    -- 42
  backlinks_count     INTEGER,                    -- 3450
  referring_domains   INTEGER,                    -- 120
  featured_backlinks  TEXT,                       -- JSON: ["ProductHunt", "TechCrunch"]
  is_clean            INTEGER DEFAULT 1,          -- 1=True
  dropped_at          TEXT DEFAULT (date('now')),
  created_at          TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_domains_niche ON domains(niche);
CREATE INDEX IF NOT EXISTS idx_domains_dr ON domains(dr_score DESC);
CREATE INDEX IF NOT EXISTS idx_domains_clean ON domains(is_clean);

-- ============================================================
-- Seed Clean Expired Domains Data
-- ============================================================

INSERT INTO domains (id, name, masked_name, tld, niche, domain_age_years, dr_score, backlinks_count, referring_domains, featured_backlinks, is_clean, dropped_at) VALUES
  (1, 'superlabs.ai',   's***bs.ai',   '.ai',   'AI',       7, 42, 3450, 120, '["ProductHunt", "TechCrunch", "GitHub"]', 1, '2026-08-12'),
  (2, 'devpulse.io',    'd***se.io',   '.io',   'DevTools', 5, 38, 2100, 95,  '["HackerNews", "Vercel", "GitHub"]',       1, '2026-08-11'),
  (3, 'cloudmetric.co', 'c***ic.co',   '.co',   'SaaS',     6, 35, 1850, 78,  '["Medium", "Substack", "Forbes"]',         1, '2026-08-12'),
  (4, 'healthbot.app',  'h***ot.app',  '.app',  'Health',   4, 31, 920,  45,  '["TechCrunch", "ProductHunt"]',            1, '2026-08-10'),
  (5, 'finflow.io',     'f***ow.io',   '.io',   'Finance',  8, 45, 5100, 160, '["Bloomberg", "Forbes", "ProductHunt"]',   1, '2026-08-13'),
  (6, 'shopgenie.co',   's***ie.co',   '.co',   'E-commerce', 5, 29, 1150, 52, '["Shopify Blog", "Medium"]',               1, '2026-08-09'),
  (7, 'promptcraft.ai', 'p***ft.ai',   '.ai',   'AI',       3, 36, 2400, 88,  '["ProductHunt", "X/Twitter"]',             1, '2026-08-12'),
  (8, 'codeflow.dev',   'c***ow.dev',  '.dev',  'DevTools', 6, 40, 3100, 110, '["GitHub", "StackOverflow"]',              1, '2026-08-13');

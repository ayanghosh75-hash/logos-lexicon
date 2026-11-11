-- Logos Lexicon Relational Export
-- Generated: 2026-09-26T03:45:12.797Z
-- Lead Theological Editor: Rev. Ayan Kumar Ghosh

CREATE TABLE IF NOT EXISTS master_entries (
  id VARCHAR(64) PRIMARY KEY,
  slug VARCHAR(128) UNIQUE NOT NULL,
  headword_english VARCHAR(255) NOT NULL,
  category VARCHAR(128) NOT NULL,
  definition_simple TEXT NOT NULL,
  definition_study TEXT NOT NULL,
  definition_academic TEXT NOT NULL,
  author VARCHAR(128) NOT NULL,
  publication_status VARCHAR(64) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS search_gaps (
  id VARCHAR(64) PRIMARY KEY,
  query VARCHAR(255) NOT NULL,
  search_count INTEGER DEFAULT 1,
  priority_score INTEGER DEFAULT 0,
  user_requested BOOLEAN DEFAULT FALSE,
  status VARCHAR(64) DEFAULT 'pending',
  first_searched_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id VARCHAR(64) PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  operator VARCHAR(128) NOT NULL,
  instruction TEXT NOT NULL,
  risk_level VARCHAR(16) NOT NULL,
  outcome VARCHAR(32) NOT NULL,
  triage_summary TEXT
);

-- End of portable SQL DDL

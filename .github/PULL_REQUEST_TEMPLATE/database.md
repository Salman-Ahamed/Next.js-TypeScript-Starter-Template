---
name: "🗃 Database Change"
description: "For database schema changes, migrations, and optimizations"
title: "[DB] #123 - Brief description"
labels: "database, sql"
assignees: "db-team"
---

## 🎯 Change Overview

<!-- Provide a clear description of the database changes -->

## 📊 Database Impact

| Metric     | Before | After | Change |
| ---------- | ------ | ----- | ------ |
| Table Size | 10GB   | 12GB  | +20%   |
| Index Size | 2GB    | 1.8GB | -10%   |
| Query Time | 2.5s   | 1.2s  | -52%   |

## 🛠️ Changes Made

- [ ] Schema modifications
- [ ] Data migrations
- [ ] Index optimizations
- [ ] Query improvements
- [ ] Backup strategy

## 📝 Schema Changes

```sql
-- Before
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- After
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🧪 Testing

- [ ] Migration tested
- [ ] Rollback tested
- [ ] Performance tested
- [ ] Data integrity verified
- [ ] Backup/restore tested

## 🔍 Review Checklist

- [ ] Data integrity maintained
- [ ] Performance impact assessed
- [ ] Backup strategy verified
- [ ] Rollback plan prepared
- [ ] Security implications reviewed
- [ ] No data loss risk

## 📚 Documentation

- [ ] Schema changes documented
- [ ] Migration guide prepared
- [ ] Rollback procedure documented
- [ ] Monitoring updated
- [ ] Runbook updated

## ⚡ Deployment

- [ ] Staging verified
- [ ] Backup taken
- [ ] Monitoring configured
- [ ] Alerts updated
- [ ] Rollback tested

## 📌 Related Issues

Closes #123

## 📝 Additional Notes

<!-- Any additional context or notes -->

---
name: 🛠 Database Migration
about: Schema or data migration request
title: "[Migration] "
labels: database, migration
assignees: "db-admin"
---

**Migration Type**

- [ ] Schema Change
- [ ] Data Migration
- [ ] Index Optimization
- [ ] Partitioning
- [ ] Backup/Restore
- [ ] Other (please specify)

**Database Information**

- Database Type: [e.g. MySQL, PostgreSQL]
- Version: [e.g. 8.0.32, 15.2]
- Environment: [e.g. Production, Staging]
- Size: [e.g. 100GB, 1TB]

**Migration Details**

- Purpose:
- Scope:
- Estimated Duration:
- Downtime Required:
- Rollback Plan:

**Current Schema**

```sql
-- Current table structure
CREATE TABLE example (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);
```

**Proposed Changes**

```sql
-- Proposed changes
ALTER TABLE example
ADD COLUMN email VARCHAR(255);
```

**Data Impact**

- Tables Affected:
- Rows Affected:
- Data Volume:
- Data Validation:

**Performance Considerations**

- Index Changes:
- Query Impact:
- Storage Impact:
- Backup Requirements:

**Testing Plan**

- Test Environment:
- Test Data:
- Validation Steps:
- Performance Testing:

**Rollback Plan**

```sql
-- Rollback SQL
ALTER TABLE example
DROP COLUMN email;
```

**Timeline**

- Proposed Date:
- Maintenance Window:
- Estimated Duration:
- Dependencies:

**Impact**

- [ ] Critical (Requires Downtime)
- [ ] High (Major Changes)
- [ ] Medium (Minor Changes)
- [ ] Low (No Impact)

**Additional Context**

- Related Issues:
- Documentation:
- Stakeholders:
- Approvals:

**Priority Level**

- [ ] Critical (Blocks Release)
- [ ] High (Should be done in next sprint)
- [ ] Medium (Should be planned soon)
- [ ] Low (Can be scheduled later)

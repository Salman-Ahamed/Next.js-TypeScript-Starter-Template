---
name: "♻️ Refactoring"
description: "For code refactoring and technical improvements"
title: "[REFACTOR] #123 - Brief description"
labels: "refactor, technical-debt"
assignees: ""
---

## 🎯 Refactoring Overview

<!-- Provide a clear description of the refactoring changes -->

## 📊 Code Quality Metrics

| Metric                | Before | After | Change |
| --------------------- | ------ | ----- | ------ |
| Code Coverage         | 75%    | 85%   | +10%   |
| Cyclomatic Complexity | 15     | 8     | -47%   |
| Duplicate Code        | 5%     | 2%    | -60%   |
| Maintainability       | C      | A     | ↑      |

## 🛠️ Changes Made

- [ ] Code structure improved
- [ ] Naming conventions updated
- [ ] Design patterns applied
- [ ] Code duplication removed
- [ ] Performance optimized
- [ ] Documentation updated

## 📝 Code Examples

```typescript
// Before
function processData(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].active) {
      result.push(data[i].value);
    }
  }
  return result;
}

// After
function processData(data) {
  return data.filter((item) => item.active).map((item) => item.value);
}
```

## 🧪 Testing

- [ ] Unit tests updated
- [ ] Integration tests updated
- [ ] Performance tests run
- [ ] Regression tests passed
- [ ] Edge cases verified

## 📚 Documentation

- [ ] Code comments updated
- [ ] Architecture documented
- [ ] Design decisions documented
- [ ] API documentation updated
- [ ] README updated

## 🔍 Review Checklist

- [ ] No functionality changes
- [ ] All tests passing
- [ ] Performance maintained/improved
- [ ] Code style consistent
- [ ] Documentation updated
- [ ] No new technical debt

## 📌 Related Issues

Closes #123

## 📝 Additional Notes

<!-- Any additional context or notes -->

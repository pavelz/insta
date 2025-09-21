# GitHub Workflows

This directory contains GitHub Actions workflows for the repository.

## Available Workflows

### 1. Ruby (ruby.yml)
- **Trigger**: Push/PR to master branch
- **Purpose**: Run tests, setup database, compile assets
- **Status**: Existing workflow for CI/CD

### 2. Check Rails Version (check-rails-version.yml)
- **Trigger**: Manual (`workflow_dispatch`)
- **Purpose**: Check if the Rails version used in the repository is up-to-date

## Using the Rails Version Check Action

The Rails Version Check action helps you monitor whether your Rails version is current.

### How to Run

1. Go to the **Actions** tab in your GitHub repository
2. Select **"Check Rails Version"** from the workflow list
3. Click **"Run workflow"** button
4. Click **"Run workflow"** to confirm

### What It Does

1. **Detects Current Version**: Extracts Rails version from:
   - `Gemfile.lock` (preferred - shows actual locked version)
   - `Gemfile` (fallback - shows version constraint)
   - `bundle show rails` (final fallback)

2. **Fetches Latest Version**: Queries the RubyGems API to get the latest stable Rails release

3. **Compares & Reports**: 
   - ✅ Up-to-date: Current version matches latest
   - ⚠️ Outdated: Current version is behind latest
   - 📋 Major version differences highlighted

### Example Output

```
=== Rails Version Check Results ===
Current Rails version: 5.2.8.1
Latest Rails version: 8.0.2.1

⚠️ Rails version is OUTDATED!
Consider upgrading from 5.2.8.1 to 8.0.2.1

📋 Note: You are on Rails 5.2.x, while the latest is 8.0.x
This may require a major version upgrade with breaking changes.
```

### Step Summary

The action creates a detailed step summary that appears in the GitHub Actions UI:

| Metric | Value |
|--------|-------|
| Current Version | `5.2.8.1` |
| Latest Version | `8.0.2.1` |
| Status | outdated |

### Error Handling

The action handles common error scenarios:
- Missing Rails version in Gemfile/Gemfile.lock
- Network issues accessing RubyGems API
- Invalid API responses

### When to Use

- **Regular maintenance**: Run monthly/quarterly to stay informed
- **Before major deployments**: Ensure you're aware of available updates
- **Security reviews**: Check for newer versions with security fixes
- **Planning upgrades**: Assess the scope of potential Rails upgrades
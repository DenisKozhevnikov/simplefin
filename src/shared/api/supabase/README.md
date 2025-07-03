# Supabase Integration Guide

This document describes how to set up and maintain Supabase integration for this project.

## 1. Install Supabase CLI

If you use Homebrew:
```bash
brew install supabase/tap/supabase
```

## 2. Login to Supabase

Authenticate your CLI with your Supabase account:
```bash
supabase login
```

## 3. Update TypeScript Types

To generate and update TypeScript types from your Supabase project, run:
```bash
supabase gen types typescript --project-id <your-project-id> > src/shared/api/supabase/types.ts
```
Replace `<your-project-id>` with your actual Supabase project ID.

---

For more information, see the [Supabase CLI documentation](https://supabase.com/docs/guides/cli).

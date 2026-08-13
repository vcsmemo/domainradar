#!/bin/bash

# NicheDomainRadar — Automated Daily Fetch & Cloudflare Deploy Script

echo "=================================================="
echo "🚀 [$(date)] Starting NicheDomainRadar Automated Pipeline"
echo "=================================================="

# 1. 进入项目根目录
cd /Users/johntian/Alternative

# 2. 运行 Python 自动化抓取与清洗引擎
echo "🔍 Running Data Pipeline & Cleaning Engine..."
python3 scripts/fetch_domains.py

# 3. 重新编译 Astro 静态 SSG 站点
echo "⚡ Building Astro SSG Site..."
./node_modules/.bin/astro build

# 4. 自动部署发布最新数据至 Cloudflare Pages (nichedomainradar)
echo "🌎 Deploying to Cloudflare Pages (nichedomainradar)..."
npx wrangler pages deploy dist --project-name=nichedomainradar

echo "=================================================="
echo "✅ [$(date)] Daily Update Completed Successfully!"
echo "=================================================="

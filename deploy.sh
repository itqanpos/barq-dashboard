#!/bin/bash

# Exit on error
set -e

echo "🚀 بدء نشر لوحة التحكم على GitHub Pages..."

# Build the project
echo "📦 جاري بناء المشروع..."
pnpm build

# Create dist directory if it doesn't exist
if [ ! -d "dist" ]; then
    echo "❌ خطأ: لم يتم بناء المشروع بنجاح"
    exit 1
fi

# Create a temporary directory for deployment
DEPLOY_DIR=$(mktemp -d)
echo "📁 إنشاء مجلد النشر: $DEPLOY_DIR"

# Copy dist contents to deploy directory
cp -r dist/* "$DEPLOY_DIR/"

# Add .nojekyll file to prevent Jekyll processing
touch "$DEPLOY_DIR/.nojekyll"

# Create CNAME file for custom domain (optional)
# echo "dashboard.barq.com" > "$DEPLOY_DIR/CNAME"

# Initialize git in deploy directory
cd "$DEPLOY_DIR"
git init
git config user.email "deploy@barq.com"
git config user.name "Barq Deploy Bot"
git add .
git commit -m "Deploy: $(date)"

# Push to gh-pages branch
echo "📤 جاري رفع الملفات إلى GitHub Pages..."
git push -f https://github.com/itqanpos/barq-dashboard.git master:gh-pages

# Cleanup
cd -
rm -rf "$DEPLOY_DIR"

echo "✅ تم النشر بنجاح!"
echo "🌐 الرابط: https://itqanpos.github.io/barq-dashboard/"

#!/bin/bash

# AI Revenue Engine - GitHub Deployment Script
# This script prepares and pushes the project to GitHub

set -e  # Exit on error

echo "🚀 AI Revenue Engine - GitHub Deployment"
echo "========================================"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already configured"
    CURRENT_REMOTE=$(git remote get-url origin)
    echo "   Current remote: $CURRENT_REMOTE"
else
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/lubosik/AIrevenueengine.git
    echo "✅ Remote added"
fi

# Stage all files
echo ""
echo "📝 Staging all files..."
git add .
echo "✅ Files staged"

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "⚠️  No changes to commit (everything is already committed)"
else
    echo ""
    echo "💾 Committing changes..."
    git commit -m "Complete AI Revenue Engine landing page - Production ready

- All 40 phases completed
- React + Vite + Tailwind CSS + Framer Motion
- Fully responsive design
- SEO optimized
- Performance optimized
- Production ready"
    echo "✅ Changes committed"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo "   Repository: lubosik/AIrevenueengine"
echo "   Branch: main"
echo ""

# Check if branch exists on remote
if git ls-remote --heads origin main | grep -q main; then
    echo "⚠️  Remote branch 'main' already exists"
    echo "   Attempting to push (may need to pull first if conflicts exist)..."
    git push -u origin main || {
        echo ""
        echo "⚠️  Push failed. This might be because:"
        echo "   1. Remote has commits that local doesn't have"
        echo "   2. Authentication required"
        echo ""
        echo "💡 Try running:"
        echo "   git pull origin main --allow-unrelated-histories"
        echo "   (Resolve any conflicts)"
        echo "   git push -u origin main"
        exit 1
    }
else
    echo "✅ Pushing new branch to GitHub..."
    git push -u origin main
fi

echo ""
echo "✅ SUCCESS! Project pushed to GitHub"
echo ""
echo "📋 Next Steps:"
echo "   1. Go to: https://github.com/lubosik/AIrevenueengine"
echo "   2. Verify all files are uploaded"
echo "   3. Deploy to Vercel (see DEPLOYMENT_HANDOFF.md)"
echo ""
echo "🎉 Deployment complete!"


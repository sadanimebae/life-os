'use client';
import posts from '@/data/content.json';
import PostTemplate from './PostTemplate';

export default function ContentVault() {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800">
      <h2 className="font-semibold mb-2">Content Vault</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <PostTemplate key={post.title} post={post} />
        ))}
      </ul>
    </div>
  );
}

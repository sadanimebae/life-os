'use client';

import { useState } from 'react';

type Post = {
  title: string;
  tag: string;
  status: string;
};

const initialPosts: Post[] = [
  { title: 'Panty Drop Tease 01', tag: 'NSFW', status: 'Ready' },
  { title: 'Cozy Packing Video', tag: 'Etsy', status: 'Needs Edit' },
  { title: 'Courage Meme Plushie', tag: 'TikTok', status: 'Draft' },
];

export default function ContentVault() {
  const [filter, setFilter] = useState('All');

  const filteredPosts = initialPosts.filter((post) =>
    filter === 'All' ? true : post.tag === filter
  );

  const tags = ['All', 'NSFW', 'Etsy', 'TikTok', 'Instagram'];

  return (
    <div className="p-4 border rounded-lg bg-pink-50 dark:bg-pink-900">
      <h2 className="font-semibold mb-2">📦 Content Vault</h2>
      <div className="flex gap-2 text-sm mb-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-2 py-1 rounded ${
              filter === tag
                ? 'bg-pink-500 text-white'
                : 'bg-white dark:bg-neutral-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="text-sm space-y-1">
        {filteredPosts.map((post, i) => (
          <li key={i} className="flex justify-between items-center">
            <span>📝 {post.title}</span>
            <span className="text-xs opacity-75">{post.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

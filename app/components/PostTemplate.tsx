'use client';

import EnergyTag from './EnergyTag';

export default function PostTemplate({ post }: { post: any }) {
  return (
    <li className="border p-3 rounded-md bg-neutral-100 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{post.title}</p>
          <p className="text-xs text-neutral-500">{post.platform}</p>
        </div>
        <EnergyTag level={post.energy} />
      </div>
      <p className="text-sm mt-1">{post.description}</p>
    </li>
  );
}

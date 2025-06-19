import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const searchQuery = url.searchParams.get('s') || '';

    // sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock data moved from +page.svelte
    const results = [
        {
            title: '9-nine-ここのつここのかここのいろ',
            size: '2.27GB ',
            category: ['熟肉', 'ぱれっと', 'rar'],
            filePath: 'zd/1001-1500/[170428][ぱれっと] 9-nine-ここのつここのかここのいろ.rar'
        },
        {
            title: '9-nine-ここのつここのかここのいろ',
            size: '2.27GB ',
            category: ['熟肉', 'ぱれっと', 'rar'],
            filePath: 'zd/1001-1500/[170428][ぱれっと] 9-nine-ここのつここのかここのいろ2.rar'
        }
    ];

    const aiIntro = {
        title: 'AI 简介',
        brief: 'AI 简介',
        detail: 'AI 简介'
    };

    return {
        searchQuery,
        results,
        aiIntro
    };
};
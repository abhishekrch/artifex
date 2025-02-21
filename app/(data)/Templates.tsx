export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates a blog title based on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/17334/17334569.png',
        aiPrompot: 'Give me 5 blog topic ideas in bullet points based on the given niche & outline and format the result in a rich text editor.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates blog content based on the provided niche and outline.',
        category: 'Blog',
        icon: '',
        aiPrompot: 'Generate a well-structured blog post with an introduction, main points, and conclusion based on the given niche and outline.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topic ideas based on your niche.',
        category: 'Blog',
        icon: '',
        aiPrompot: 'Give me 10 blog topic ideas in bullet points based on the given niche.',
        slug: 'generate-blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that generates optimized YouTube SEO titles.',
        category: 'YouTube',
        icon: '',
        aiPrompot: 'Generate an engaging and SEO-friendly YouTube title based on the provided topic.',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that generates YouTube video descriptions.',
        category: 'YouTube',
        icon: '',
        aiPrompot: 'Generate an engaging YouTube video description with a call to action.',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter video details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Add Emoji to Text',
        desc: 'An AI tool that enhances text by adding relevant emojis.',
        category: 'Text',
        icon: '',
        aiPrompot: 'Enhance the given text by adding relevant emojis while keeping the original meaning.',
        slug: 'add-emoji-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that creates engaging Instagram posts.',
        category: 'Social Media',
        icon: '',
        aiPrompot: 'Generate an engaging Instagram post based on the provided topic.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter your topic or theme',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool that rewrites articles while ensuring plagiarism-free content.',
        category: 'Writing',
        icon: '',
        aiPrompot: 'Rewrite the given article while maintaining the original meaning and making it plagiarism-free.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter your article text',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates optimized YouTube tags.',
        category: 'YouTube',
        icon: '',
        aiPrompot: 'Generate a list of SEO-friendly YouTube tags based on the given video topic.',
        slug: 'youtube-tags',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    }
];

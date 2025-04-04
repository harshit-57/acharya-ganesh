export const navigations = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
    { label: 'USER', type: 'label' },
    {
        name: 'Manage Admin',
        path: '/admin/management',
        icon: 'group',
        permissionName: 'ManageAdmin',
    },
    { label: 'PAGES', type: 'label' },
    {
        name: 'Courses Management',
        path: '/admin/courses',
        icon: 'inventory',
        permissionName: 'ManageCourse',
    },
    {
        name: 'Blog Management',
        path: '/admin/blogs',
        icon: 'article',
        permissionName: 'ManageBlog',
    },
    {
        name: 'Spirituality Management',
        path: '/admin/spiritualities',
        icon: 'temple_hindu',
        permissionName: 'ManageSpirituality',
    },
    {
        name: 'Web Story Management',
        path: '/admin/stories',
        icon: 'auto_stories',
        permissionName: 'ManageWebStory',
    },
    {
        name: 'Citation Management',
        path: '/admin/citations',
        icon: 'share_location',
        permissionName: 'ManageCitation',
    },
    {
        name: 'Service Management',
        path: '/admin/services',
        icon: 'newspaper',
        // permissionName: 'ManageService',
    },

    { label: 'CONSULTATIONS', type: 'label' },
    {
        name: 'Slot Management',
        path: '/admin/booking/slots',
        icon: 'headset_mic',
        // permissionName: 'ManageBooking',
    },
    {
        name: 'Booking Management',
        path: '/admin/booking',
        icon: 'book',
        // permissionName: 'ManageBooking',
    },

    { label: 'REVIEWS', type: 'label' },
    {
        name: 'Testimonial Management',
        path: '/admin/testimonials',
        icon: 'reviews',
        permissionName: 'ManageTestimonial',
    },
    { label: 'HELP', type: 'label' },
    {
        name: 'Support Management',
        path: '/admin/support',
        icon: 'support_agent',
        permissionName: 'ManageSupport',
    },
];

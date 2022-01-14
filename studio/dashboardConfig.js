export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e208abd5eabe4fa599695a',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-nhu916hi',
                  apiId: 'be69786f-0d07-4686-bc0e-dab9aeb22155'
                },
                {
                  buildHookId: '61e208aca71e1e4dcc73ae42',
                  title: 'Blog Website',
                  name: 'sanity-portfolio-web-85tsqjvx',
                  apiId: '31b56bd8-5b20-4a2f-8d64-a10e84f68b88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sam-young-dev/sanity-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-portfolio-web-85tsqjvx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

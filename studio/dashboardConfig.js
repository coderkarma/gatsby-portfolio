export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d4cab0a6f4982b95854834d',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-bk88p6uo',
                  apiId: 'da3b28e9-d5d0-4522-a96e-245cbad2a9ed'
                },
                {
                  buildHookId: '5d4cab0a1fb738b79c308609',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-mci4cvd8',
                  apiId: '6fb227b9-a4d5-4a19-913a-80025415702b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coderkarma/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-mci4cvd8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

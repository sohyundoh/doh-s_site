
const skills = [
    {
      title: 'Javascript',
      competency: 3,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
        title: 'React',
        competency: 2,
        category:['Web Development', 'Javascript'],
    },
    {
      title: 'Git',
      competency: 2,
      category: ['Tools'],
    },
    {
      title: 'HTML + SASS/SCSS/CSS',
      competency: 3,
      category: ['Web Development', 'Languages'],
    },
    {
      title: 'Python',
      competency: 4,
      category: ['Languages', 'Python'],
    },
    {
      title: 'C++',
      competency: 5,
      category: ['Languages'],
    },
    {
      title: 'R',
      competency: 2,
      category: ['Languages'],
    },
    {
        title: 'Java',
        competency: 4,
        category:['Languages'],
    },
    {
        title:'Django',
        competency: 3,
        category:['Web Development','Python'],
    }
  ].map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  const colors = [
    '#ffe4e1',
    '#B0C4DE',
    '#afeeee',
    '#ffb6c1',
    '#fff5ee',
  ];
  
  const categories = [
    ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
  ]
    .sort()
    .map((category, index) => ({
      name: category,
      color: colors[index],
    }));
  
  export { skills, categories};
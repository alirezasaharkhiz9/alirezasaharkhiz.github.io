const skills = [
  {
    title: 'PostgreSQL/SQL',
    competency: 3,
    category: ['Databases', 'Languages', 'Data Science'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Deep Learning with Tensorflow + Keras',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Deep Learning with PyTorch',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Pytorch Lightning',
    competency: 5,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Data Science'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages', 'R'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Natural Language Processing (NLP)',
    competency: 4,
    category: ['Data Science', 'R', 'Python'],
  },
  {
    title: 'Statistics',
    competency: 5,
    category: ['Statistics', 'Data Science', 'R', 'Python'],
  },
  {
    title: 'Large Language Model (LLM)',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Computer Vision',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'LangChain',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#40494e',
  '#c3423f',
  '#64cb7b',
  '#37b1f5',
  '#cc7b94',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };

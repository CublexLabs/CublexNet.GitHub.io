export interface Project {
  id: 'labs' | 'server-tr' | 'server-eu';
  url: string;
  iconName: 'Beaker' | 'Sword' | 'Globe';
  enabled: boolean;
  color: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'labs',
    url: 'https://labs.cublex.net',
    iconName: 'Beaker',
    enabled: true,
    color: 'from-blue-500 to-cyan-500',
    gradient: 'hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]',
  },
  {
    id: 'server-tr',
    url: 'https://mctr.cublex.net',
    iconName: 'Sword',
    enabled: true,
    color: 'from-red-500 to-orange-500',
    gradient: 'hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)]',
  },
  {
    id: 'server-eu',
    url: 'https://mceu.cublex.net',
    iconName: 'Globe',
    enabled: false,
    color: 'from-purple-500 to-pink-500',
    gradient: 'hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]',
  },
];

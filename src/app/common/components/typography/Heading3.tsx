import { Typography } from '@mui/material';

export type Props = Readonly<{
  readonly children: React.ReactNode;
}>;

export const Heading3 = ({ children }: Props) => <Typography variant="h3">{children}</Typography>;

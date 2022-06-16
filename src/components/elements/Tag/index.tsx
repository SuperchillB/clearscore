import { Paragraph } from '../Paragraph';
import { TagProps } from './types';
import TagContainer from './Tag.styles';

const Tag = ({ children, ...props }: TagProps) => (
  <TagContainer borderRadius="tag" display="inline-block" px="small" {...props}>
    <Paragraph my="tiny" variant="subTitle">
      {children}
    </Paragraph>
  </TagContainer>
);

export default Tag;

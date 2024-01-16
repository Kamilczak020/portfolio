import classnames from 'classnames';
import { FontSize, FontWeight, LineHeight } from '@penumbra/components/Typography/designSystem';
import { capitalizeFirstLetter } from '@penumbra/util/text';
import style from './style.module.scss';

export interface TypographyProps {
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  overflowEllipsis?: boolean;
  isUpperCase?: boolean;
  isLowerCase?: boolean;
}

export const getTypographyClassNames = ({
  weight = FontWeight.Regular,
  overflowEllipsis,
  lineHeight,
  isUpperCase,
  isLowerCase,
}: TypographyProps) =>
  classnames(
    style[`weight${capitalizeFirstLetter(weight)}`],
    style[`lineHeight${lineHeight}`],
    overflowEllipsis && style.ellipsis,
    isLowerCase && style.lowerCase,
    isUpperCase && style.upperCase,
  );

export const omitTypographyProps = <T extends TypographyProps>({
  size,
  weight,
  lineHeight,
  overflowEllipsis,
  isUpperCase,
  isLowerCase,
  ...restProps
}: T) => restProps;

export enum FontSize {
  /**
   * 36px
   */
  XXXL = 'Xxxl',

  /**
   * 32px
   */
  XXL = 'Xxl',

  /**
   * 24px
   */
  XL = 'Xl',

  /**
   * 18px
   */
  L = 'L',

  /**
   * 16px
   */
  M = 'M',

  /**
   * 14px
   */
  S = 'S',

  /**
   * 12px
   */
  XS = 'Xs',
}

export enum FontWeight {
  Bold = 'Bold',
  Semibold = 'Semibold',
  Regular = 'Regular',
}

export enum LineHeight {
  /**
   * 48px
   */
  XXXL = 'Xxxl',

  /**
   * 36px
   */
  XXL = 'Xxl',

  /**
   * 30px
   */
  XL = 'Xl',

  /**
   * 24px
   */
  L = 'L',

  /**
   * 20px
   */
  M = 'M',

  /**
   * 18px
   */
  S = 'S',

  /**
   * 16px
   */
  XS = 'Xs',
}

export const defaultLineHeights: Record<FontSize, LineHeight> = {
  [FontSize.XXXL]: LineHeight.XXXL,
  [FontSize.XXL]: LineHeight.XXL,
  [FontSize.XL]: LineHeight.XL,
  [FontSize.L]: LineHeight.L,
  [FontSize.M]: LineHeight.M,
  [FontSize.S]: LineHeight.S,
  [FontSize.XS]: LineHeight.XS,
};

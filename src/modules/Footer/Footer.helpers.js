import { NO_FOOTER_ROUTES } from './Footer.constans';

export const checkFooterHidden = (path) => {
  return NO_FOOTER_ROUTES.includes(path.replace(/[/ ]/g, ''));
};

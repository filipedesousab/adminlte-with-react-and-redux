import {
  CHANGE_CONTENT_TITLE,
  CHANGE_CONTENT_SUBTITLE,
  CHANGE_CONTENT_BREADCRUMB,
  CHANGE_CONTENT_ALERTS,
} from './types';

export const changeTitle = title => ({
  type: CHANGE_CONTENT_TITLE,
  payload: title,
});

export const changeSubtitle = subtitle => ({
  type: CHANGE_CONTENT_SUBTITLE,
  payload: subtitle,
});

export const changeBreadcrumb = breadcrumb => ({
  type: CHANGE_CONTENT_BREADCRUMB,
  payload: breadcrumb,
});

export const changeAlerts = alerts => ({
  type: CHANGE_CONTENT_ALERTS,
  payload: alerts,
});

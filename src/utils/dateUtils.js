// src/utils/dateUtils.js
import { formatDistanceToNow, parseISO } from 'date-fns';

export function formatDate(dateString) {
  return formatDistanceToNow(parseISO(dateString), { addSuffix: true });
}

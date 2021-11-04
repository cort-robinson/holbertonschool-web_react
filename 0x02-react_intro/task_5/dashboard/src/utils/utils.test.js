import { strict as assert } from 'assert';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {
  it('validates return of getFullYear', () => {
    assert.equal(getFullYear(), new Date().getFullYear());
  })
  it('validates return string of getFooterCopy when arg is true', () => {
    assert.equal(getFooterCopy(true), 'Holberton School')
  })
  it('validates return string of getFooterCopy when arg is false', () => {
    assert.equal(getFooterCopy(false), 'Holberton School main dashboard')
  })
  it('validates return string of getLatestNotification', () => {
    assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD')
  })
})

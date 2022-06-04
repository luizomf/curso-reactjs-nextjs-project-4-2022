/* eslint-disable no-undef */

import config from '../config';
import { loadPages } from './load-pages';
import * as mapDataModule from './map-data';
import { vi, describe, expect, beforeEach } from 'vitest';

vi.mock('./map-data', () => {
  return {
    mapData: vi.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe('load-pages', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
    mockJson = vi.fn().mockResolvedValue(
      Promise.resolve({
        data: [
          {
            attributes: {
              calledWith: 'this',
            },
          },
        ],
      }),
    );
    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({
      json: mockJson,
    });

    vi.clearAllMocks();
  });

  it('should call fetch and mapData with correct values', async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const url = config.url;
    expect(mockFetch).toHaveBeenCalledWith(url);
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith([
      {
        calledWith: 'this',
      },
    ]);
    expect(result).toEqual({ mapped: 1 });
  });

  it('should call fetch with correct slug', async () => {
    await loadPages('atenção testando');
    const url = config.url + 'filters[slug]=' + 'atenotestando';
    expect(mockFetch).toHaveBeenCalledWith(url);
  });
});

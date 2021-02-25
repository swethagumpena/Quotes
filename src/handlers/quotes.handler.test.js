const quoteHandler = require('./quotes.handler');
const quoteService = require('../services/quotes.service');

describe('Quote handler', () => {
  it('should set a status code 200 and get quotes', async () => {
    const mockValue = [
      {
        id: 3,
        quoteId: '-14YplwiKmh',
        content: 'A short saying often contains much wisdom.',
        author: 'Sophocles',
        length: 42,
        tags: [
          'famous-quotes',
        ],
        createdAt: '2021-02-25T10:59:56.534Z',
        updatedAt: '2021-02-25T10:59:56.534Z',
      },
    ];
    const mockRequest = {
      query: {},
    };
    jest.spyOn(quoteService, 'getQuote').mockResolvedValue(mockValue);
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),
    };
    await quoteHandler.getQuotes(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(mockValue);
  });

  it('should set a status code 200 and send updated quote', async () => {
    const mockValue = [
      {
        id: 3,
        quoteId: '-14YplwiKmh',
        content: 'A short saying often contains much wisdom.',
        author: 'Sophocles',
        length: 42,
        tags: [
          'famous-quotes',
        ],
        createdAt: '2021-02-25T10:59:56.534Z',
        updatedAt: '2021-02-25T10:59:56.534Z',
      },
    ];
    const spyUpdateQuote = jest.spyOn(quoteService, 'updateQuote').mockResolvedValue(mockValue);
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),
    };
    const mockRequest = {
      params: { id: '-14YplwiKmh' },
      body: {
        content: 'Friendship',
        author: 'Lord Byron',
        length: 307,
        tags: [
          'friendship',
        ],
      },
    };
    await quoteHandler.updateQuote(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(mockValue);
    expect(spyUpdateQuote).toHaveBeenCalledWith('-14YplwiKmh', {
      content: 'Friendship',
      author: 'Lord Byron',
      length: 307,
      tags: [
        'friendship',
      ],
    });
  });

  it('should set a status code 404 when invalid id is given', async () => {
    const mockValue = [];
    const spyUpdateTodo = jest.spyOn(quoteService, 'updateQuote').mockResolvedValue(mockValue);
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),
    };
    const mockRequest = {
      params: { id: '-14YplwiKmh' },
      body: {
        content: 'Friendship',
        author: 'Lord Byron',
        length: 307,
        tags: [
          'friendship',
        ],
      },
    };
    await quoteHandler.updateQuote(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    // expect(mockResponse.send).toHaveBeenCalledWith(mockValue);
    // expect(spyGetTodo).toHaveBeenCalledWith([]);
  });

  it('should set a status code 200 and send deleted quote', async () => {
    const mockValue = [
      {
        id: 3,
        quoteId: '-14YplwiKmh',
        content: 'A short saying often contains much wisdom.',
        author: 'Sophocles',
        length: 42,
        tags: [
          'famous-quotes',
        ],
        createdAt: '2021-02-25T10:59:56.534Z',
        updatedAt: '2021-02-25T10:59:56.534Z',
      },
    ];
    const spyGetTodo = jest.spyOn(quoteService, 'deleteQuoteWithId').mockResolvedValue(mockValue);
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),
    };
    const mockRequest = {
      params: { id: '-14YplwiKmh' },
    };
    await quoteHandler.deleteQuoteById(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(spyGetTodo).toHaveBeenCalledWith('-14YplwiKmh');
  });
});

const { Op } = require('sequelize');
const { Quote } = require('../models'); // todos should be same as modelName in model->todos.js
const quoteService = require('./quotes.service');

// anything which has await before it mock

describe('Quote service', () => {
  it('should get a list of quotes', async () => {
    const mockResponse = [
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
    jest
      .spyOn(Quote, 'findAll')
      .mockResolvedValue(mockResponse);
    const response = await quoteService.getQuote();
    expect(response).toStrictEqual(mockResponse); // coz function is returning
  });

  // toodo
  it('should get a list of quotes based on query', async () => {
    const mockResponse = [
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
    const quoteByQuery = jest
      .spyOn(Quote, 'findAll')
      .mockResolvedValue(mockResponse);
    const response = await quoteService.getQuoteByQuery({ tags: 'famous-quotes' });
    expect(response).toStrictEqual(mockResponse); // coz function is returning
    expect(quoteByQuery).toHaveBeenCalledWith({
      where: {
        tags: { [Op.contains]: ['famous-quotes'] },
      },
    });
  });

  it('should update a quote based on id', async () => {
    const mockResponse = [
      1,
      [
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
      ],
    ];
    const spyOnUpdateQuoteRepo = jest
      .spyOn(Quote, 'update')
      .mockResolvedValue(mockResponse);
    const response = await quoteService.updateQuote('-14YplwiKmh', {
      content: 'Friendship',
      author: 'Lord Byron',
      length: 307,
      tags: [
        'friendship',
      ],
    });
    expect(response).toStrictEqual(mockResponse[1]);
    expect(spyOnUpdateQuoteRepo).toHaveBeenCalledWith({
      content: 'Friendship',
      author: 'Lord Byron',
      length: 307,
      tags: [
        'friendship',
      ],
    },
    {
      where: {
        quoteId: '-14YplwiKmh',
      },
      returning: true,
    });
  });

  it('should delete a quote based on id', async () => {
    const mockResponse = [
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
    const spyOnDeleteQuoteRepo = jest
      .spyOn(Quote, 'destroy')
      .mockResolvedValue(mockResponse);
    const response = await quoteService.deleteQuoteWithId('-14YplwiKmh');
    expect(response).toStrictEqual(mockResponse);
    expect(spyOnDeleteQuoteRepo).toHaveBeenCalledWith({
      where: {
        quoteId: '-14YplwiKmh',
      },
    });
  });
});

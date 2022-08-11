import gql from 'graphql-tag';
const FACTORY_ADDRESS = '0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5';

export const GLOBAL_DATA = (block?: number) => {
    const queryString = ` query uniswapFactories {
      uniswapFactories(
       ${block ? `block: { number: ${block}}` : ``} 
       where: { id: "${FACTORY_ADDRESS}" }) {
        id
        totalVolumeUSD
        totalVolumeETH
        untrackedVolumeUSD
        totalLiquidityUSD
        totalLiquidityETH
        txCount
        pairCount
      }
    }`;
    return gql(queryString);
};

export const TOKEN_DATA = (tokenAddress: string, block?: string) => {
    const queryString = `
    ${TokenFields}
    query tokens {
      tokens(${block ? `block : {number: ${block}}` : ``} where: {id:"${tokenAddress}"}) {
        ...TokenFields
      }
      pairs0: pairs(where: {token0: "${tokenAddress}"}, first: 50, orderBy: reserveUSD, orderDirection: desc){
        id
      }
      pairs1: pairs(where: {token1: "${tokenAddress}"}, first: 50, orderBy: reserveUSD, orderDirection: desc){
        id
      }
    }
  `;
    return gql(queryString);
};

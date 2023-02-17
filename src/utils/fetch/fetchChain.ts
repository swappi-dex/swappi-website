interface FetchParams {
    rpcUrl: string;
    method: string;
    params?: any;
    equalKey?: string;
}

const fetchChain = ({ rpcUrl, method, params }: FetchParams) =>
    fetch(rpcUrl, {
        body: JSON.stringify({
            jsonrpc: '2.0',
            method,
            params,
            id: 1,
        }),
        headers: { 'content-type': 'application/json' },
        method: 'POST',
    })
        .then((response) => response.json())
        .then((res) => res?.result)
        .catch(() => {});

export default fetchChain;

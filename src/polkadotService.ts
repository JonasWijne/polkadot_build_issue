import types from '@/polkadotTypes';
import { ApiPromise, WsProvider } from '@polkadot/api';

export const getSubstrateApi = async (): Promise<ApiPromise> => {
    const provider = new WsProvider("wss://tfchain.grid.tf");
    return ApiPromise.create({ provider, types });
};

// Example of a polkaDot call
export const getAllFarms  = async (api: ApiPromise) => {
    const farmEntries = await api.query.tfgridModule.farms.entries();
    return farmEntries.slice(0, 10).map(([, farm]) => farm.toHuman());
}

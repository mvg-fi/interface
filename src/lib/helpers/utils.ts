import type { Asset } from "$lib/types/asset"
import type { Chain } from "$lib/types/chain";
import type { PoolData } from "$lib/types/pool";
import { getAddress } from "ethers/lib/utils";
import evmMap from "$lib/constants/evmmap.json"
import Chainlist from "$lib/constants/chainlist.json"

export const toHex = (num: string | number) => {
	const val = Number(num);
	return '0x' + val.toString(16);
};

export const shortenAddress = (addr: string, start: number, end: number) => {
	return addr.substring(0, start).toLowerCase() + "..." + addr.substring(addr.length - end).toLowerCase();
}

export const findAssetFromTokenList = (tokenList: Asset[], tokenAddress: string): Asset | undefined => {
	tokenAddress = getAddress(tokenAddress)
	return tokenList.find((obj) => { return obj.contract === tokenAddress })
}

export const findAssetsFromTokenList = (tokenList: Asset[], tokenAddresses: string[]): (Asset | undefined)[] => {
	let list: (Asset | undefined)[] = [];
	tokenAddresses.forEach((e) => {
		list.push(findAssetFromTokenList(tokenList, e))
	})
	return list
}
export const formatUSMoney = (x: string | number) => {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(x))
}

export const formatCompactUSD = (x: number, places: number = 2) => {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: places, notation: "compact", compactDisplay: "short" }).format(x)
}

export const formatPercentage = (x: number) => {
	return Number(x / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
}

export const getToday = (sub: number = 0) => {
	const d = new Date()
	d.setDate(d.getDate() - sub)
	return d.toJSON().slice(0, 10).replace(/-/g, '/');
}

export const formatDecimals = (s: string | number, n: number) => {
	return Math.floor(Number(s) * 10 ** n) / 10 ** n
}

export const sortByString = (colHeader: string, data: PoolData[], ascendingOrder: boolean) => {
	data = data.sort((obj1, obj2) => {
		if (obj1[colHeader] < obj2[colHeader]) {
			return -1;
		} else if (obj1[colHeader] > obj2[colHeader]) {
			return 1;
		}
		return 0;
	});
	if (!ascendingOrder) {
		data = data.reverse()
	}
	return data
}

export const sortByNumber = (colHeader: string, data: PoolData[], ascendingOrder: boolean) => {
	return data.sort((obj1, obj2) => {
		return ascendingOrder ? Number(obj2[colHeader]) - Number(obj1[colHeader])
			: Number(obj1[colHeader]) - Number(obj2[colHeader])
	});
}

export const sortPools = (colHeader: string, data: PoolData[], ascendingOrder: boolean) => {
	if (colHeader === 'name') {
		return sortByString(colHeader, data, ascendingOrder)
	}
	return sortByNumber(colHeader, data, ascendingOrder)
}

export const getChainByAsset = (assetID: string) => {
	return Object.values(Chainlist).find((chain) => {
		return chain.mixinAssetId === assetID
	})
}

export const isEVMAsset = (assetID: string) => {
	return getChainByAsset(assetID)?.evm || false
}

export const getEVMChainId = (assetID: string) => {
	if (!assetID) return
	return evmMap[assetID] || null
}
import React from 'react'
import { Table } from 'antd';


export default function CEX() {
    const columns = [
        {
            title: 'Pool',
            dataIndex: 'name',
        },
        {
            title: 'APY',
            dataIndex: 'apy',
            sorter: {
                compare: (a, b) => a.apy - b.apy,
                multiple: 3,
            },
        },
        {
            title: '24H Volume',
            dataIndex: 'vol',
            sorter: {
                compare: (a, b) => a.vol - b.vol,
                multiple: 2,
            },
        },
        {
            title: 'TVL',
            dataIndex: 'tvl',
            sorter: {
                compare: (a, b) => a.tvl - b.tvl,
                multiple: 1,
            },
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <button className='btn btn-sm btn-outline-warning'>+ Add Liquidity</button>,
        },
    ];
    const data = [
        {
            key: '1',
            name: <>
                <img className='img-fluid' style={{ width: '1.8rem' }} src={require('../../../assets/images/Shop/btc.png')} alt='btc' />
                <span className='mx-2'>BTC</span>
            </>,
            apy: '5.00%',
            vol: '$357.0m',
            tvl: '$357.0m',
        },
        {
            key: '2',
            name: <>
                <img className='img-fluid' style={{ width: '1.8rem' }} src={require('../../../assets/images/Shop/eth.png')} alt='eth' />
                <span className='mx-2'>ETH</span>
            </>,
            apy: '5.00%',
            vol: '$357.0m',
            tvl: '$357.0m',
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            <h2 className='fw-bolder text-info text-center my-5'>Market Making CEX</h2>

            <div className="container">
                <div className="border border-1 rounded-4 py-5 px-3 mb-3">
                    <div style={{ overflowX: 'auto' }}>
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </div>

                    <h5 className='text-center mb-4 mt-4 mt-md-0'>Automated Marketed Market Making (DEX)</h5>

                    <div style={{ overflowX: 'auto' }}>
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    )
}

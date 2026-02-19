import React from 'react'
import { Section } from '../shared/Section'
import { exploreStore, favsStores } from '../../mocks/stores.mock'
import { Empty } from '../shared/Empty'
import { ExploreStoreCard } from './ExploreStoreCard'

export const Explore = () => {
    return (
        <Section title='Explora' linkText='Ver más' onLinkPress={() => { }}>
            {exploreStore.length === 0 ? (
                <Empty
                    icon="storefront-outline"
                    message="No se cargaron los los lugares, intentelo más tarde."
                />
            ) : (
                exploreStore.map((store) => (
                    <ExploreStoreCard
                        key={store.id}
                        {...store}
                    />
                ))
            )}
        </Section>
    )
}
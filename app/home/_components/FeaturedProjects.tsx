import { Suspense} from 'react'
import FetchProjects from './FetchProjects'
import FeaturedProjectCard from '@/app/_components/cards/FeaturedProjectCard'


const FeaturedProjects = () => {
  return (
    <div>
        <Suspense >
            <FeaturedProjects />
        </Suspense>
    </div>
  )
}

export default FeaturedProjects
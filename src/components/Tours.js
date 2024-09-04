import Tour from './Tour';
import { tours } from '../data';

const Tours = () => {
  return (
    <>
      {/* Tours section starts */}
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
          ))}
        </div>
      </section>
      {/* Tours section ends */}
    </>
  );
}

export default Tours;

import { searchContent } from '@/services/tmdb';
import { MovieCard } from '@/components/movies/MovieCard';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';
  const results = query ? await searchContent(query) : [];

  return (
    <div className="pt-10">
      <h1 className="text-3xl font-bold mb-8">
        {query ? `Resultados para: "${query}"` : 'Busque por seus títulos favoritos'}
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {results.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      ) : query ? (
        <p className="text-gray-400 text-lg">Nenhum resultado encontrado para sua busca.</p>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <p className="text-xl">Digite algo na barra de pesquisa acima...</p>
        </div>
      )}
    </div>
  );
}

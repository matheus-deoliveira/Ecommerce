using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> specification, bool forCount)
        {
            var query = inputQuery;

            if (specification.Criteria != null)
            {
                query = query.Where(specification.Criteria);
            }

            // Não aplicamos ordenação ou paginação quando é apenas para contagem
            if (!forCount)
            {
                if (specification.OrderBy != null)
                {
                    query = query.OrderBy(specification.OrderBy);
                }

                if (specification.OrderByDescending != null)
                {
                    query = query.OrderByDescending(specification.OrderByDescending);
                }

                if (specification.IsPagingEnabled)
                {
                    query = query.Skip(specification.Skip).Take(specification.Take);
                }
            }

            // Inclui as entidades relacionadas (sempre, mesmo para contagem)
            query = specification.Includes.Aggregate(query,
                (current, include) => current.Include(include));

            return query;
        }
    }
}

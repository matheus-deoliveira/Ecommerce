﻿using Core.Entities;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductsByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductsAsync();
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypesAsync();

        // Novos métodos
        Task<Product> GetProductWithSpec(ISpecification<Product> spec);
        Task<IReadOnlyList<Product>> ListAsync(ISpecification<Product> spec);
        Task<int> CountAsync(ISpecification<Product> spec);
    }
}

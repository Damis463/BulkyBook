﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Repository.IRepository
{
    public interface IUnitOfWork : IDisposable
    {
        CategoryRepository Category { get; }
        ICoverTypeRepository CoverType { get; }
        SP_Call SP_Call { get; }


        void Save();
    }
}

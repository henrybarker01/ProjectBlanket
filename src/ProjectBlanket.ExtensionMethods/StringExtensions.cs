using System;

namespace ProjectBlanket.ExtensionMethods
{
    public static class StringExtensions
    {
        public static bool IsNullOrEmpty(this string value) =>
            String.IsNullOrEmpty(value);
    }
}

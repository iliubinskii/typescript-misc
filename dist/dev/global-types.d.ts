declare global {
    namespace configurable {
        interface LocaleName {
            readonly "en-US": true;
            readonly "ru-RU": true;
        }
    }
    namespace facades {
        namespace lang {
            interface Context {
                readonly InXDays: true;
            }
            interface Word {
                readonly Confirm: true;
                readonly Correct: true;
                readonly Day: true;
                readonly FieldIsTooShort: true;
                readonly In: true;
                readonly Must: true;
                readonly MustBeSameAs: true;
                readonly MustBeValidField: true;
                readonly MustBeValidString: true;
                readonly Password: true;
                readonly String: true;
            }
        }
    }
}
export {};
//# sourceMappingURL=global-types.d.ts.map
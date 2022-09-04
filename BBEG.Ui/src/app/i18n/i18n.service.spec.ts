import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { I18nService } from './i18n.service';

const defaultLanguage = 'en-US';
const supportedLanguages = ['eo', 'en-US', 'fr-FR'];

class MockTranslateService {
    currentLang = '';
    onLangChange = new Subject();

    use(language: string) {
        this.currentLang = language;
        this.onLangChange.next({
            lang: this.currentLang,
            translations: {}
        });
    }

    getBrowserCultureLang() {
        return 'en-US';
    }

    setTranslation(lang: string, translations: object, shouldMerge?: boolean) { }
}

describe('I18nService', () => {
    let i18nService: I18nService;
    let onLangChangeSpy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                I18nService
            ]
        });

        i18nService = TestBed.inject(I18nService);

        // Create spies.
        onLangChangeSpy = jasmine.createSpy('onLangChangeSpy');
    });

    afterEach(() => {
        // Cleanup.
        localStorage.removeItem('language');
    });

    describe('init', () => {
        it('should init with default language', () => {
            // Act.
            i18nService.init(defaultLanguage, supportedLanguages);

            // Assert.
            expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
        });

        it('should init with save language', () => {
            // Arrange.
            const savedLanguage = 'eo';
            localStorage.setItem('language', savedLanguage);

            // Act.
            i18nService.init(defaultLanguage, supportedLanguages);

            // Assert.
            expect(onLangChangeSpy).toHaveBeenCalledWith(savedLanguage);
        });
    });

    describe('set language', () => {
        it('should change current language', () => {
            // Arrange.
            const newLanguage = 'eo';
            i18nService.init(defaultLanguage, supportedLanguages);

            // Act.
            i18nService.language = newLanguage;

            // Assert.
            expect(onLangChangeSpy).toHaveBeenCalledWith(newLanguage);
        });

        it('should change current language without a region match', () => {
            // Arrange.
            const newLanguage = 'fr-CA';
            i18nService.init(defaultLanguage, supportedLanguages);

            // Act.
            i18nService.language = newLanguage;

            // Assert.
            expect(onLangChangeSpy).toHaveBeenCalledWith('fr-FR');
        });

        it('should change current language to default if unsupported', () => {
            // Arrange.
            const newLanguage = 'es';
            i18nService.init(defaultLanguage, supportedLanguages);

            // Act.
            i18nService.language = newLanguage;

            // Assert.
            expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
        });
    });

    describe('get language', () => {
        it('should return current language', () => {
            // Arrange.
            i18nService.init(defaultLanguage, supportedLanguages);

            // Act.
            const currentLanguage = i18nService.language;

            // Assert.
            expect(currentLanguage).toEqual(defaultLanguage);
        });
    });
});
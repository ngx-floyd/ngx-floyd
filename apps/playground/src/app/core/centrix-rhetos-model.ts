/* tslint:disable:no-empty-interface class-name */

import {
  createStructureInfo,
  createFunctionInfo,
  createComplexInfo,
  createComplexGetInfo,
} from '@ngx-floyd/rhetos';

export module Common {
  export const AuditingReportBaseInfo = createStructureInfo<Common.AuditingReportBase>(
    'Common/AuditingReportBase'
  );
  export interface AuditingReportBase {
    ID: string;
    Created?: Date;
    User?: string;
    ItemId?: string;
    Action?: string;
    Table?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
  }

  export const AuditingReportInfo = createStructureInfo<Common.AuditingReport>(
    'Common/AuditingReport'
  );
  export interface AuditingReport {
    ID: string;
    Created?: Date;
    User?: string;
    ItemId?: string;
    Action?: string;
    Table?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
  }

  export const LogReaderWithRelatedDataInfo = createStructureInfo<Common.LogReaderWithRelatedData>(
    'Common/LogReaderWithRelatedData'
  );
  export interface LogReaderWithRelatedData {
    ID: string;
    MasterLogItemId?: string;
    MasterLogTableName?: string;
    Created?: Date;
    UserName?: string;
    ContextInfo?: string;
    Action?: string;
    TableName?: string;
    ItemID?: string;
    Description?: string;
  }

  export const MaterializeQueryTresholdInfo = createStructureInfo<Common.MaterializeQueryTreshold>(
    'Common/MaterializeQueryTreshold'
  );
  export interface MaterializeQueryTreshold {
    ID: string;
    QueryKey: string;
    UserName?: string;
    Treshold?: number;
  }

  export const ClearMaterializeTresholdCacheInfo = createStructureInfo<
    Common.ClearMaterializeTresholdCache
  >('Common/ClearMaterializeTresholdCache');
  export interface ClearMaterializeTresholdCache {}

  export const SettingsInfo = createStructureInfo<Common.Settings>('Common/Settings');
  export interface Settings {
    ID: string;
    Naziv?: string;
    Vrijednost?: string;
    TipVrijednosti?: string;
    Opis?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const AllClaimsInfo = createStructureInfo<Common.AllClaims>('Common/AllClaims');
  export interface AllClaims {
    ID: string;
    ClaimResource?: string;
    ClaimRight?: string;
    Applies?: boolean;
  }

  export const EditablePropertyClaimInfo = createStructureInfo<Common.EditablePropertyClaim>(
    'Common/EditablePropertyClaim'
  );
  export interface EditablePropertyClaim {
    ID: string;
    ClaimResource?: string;
  }

  export const GetOsnovniSubjektAuditingLogInfo = createStructureInfo<
    Common.GetOsnovniSubjektAuditingLog
  >('Common/GetOsnovniSubjektAuditingLog');
  export interface GetOsnovniSubjektAuditingLog {
    ID?: string;
    AdditionalBoolPropertiesToFormatReverse?: string;
    AdditionalCustomPropertyNamesJsonDictionary?: string;
  }

  export const GetPismenoAuditingLogInfo = createStructureInfo<Common.GetPismenoAuditingLog>(
    'Common/GetPismenoAuditingLog'
  );
  export interface GetPismenoAuditingLog {
    ID?: string;
    AdditionalIgnorePropertiesOnAnyAction?: string;
  }

  export const GetPredmetAuditingLogInfo = createStructureInfo<Common.GetPredmetAuditingLog>(
    'Common/GetPredmetAuditingLog'
  );
  export interface GetPredmetAuditingLog {
    ID?: string;
    AdditionalIgnorePropertiesOnAnyAction?: string;
    AdditionalIgnoreRowsForTablesWithEmptyValues?: string;
    AdditionalCustomTableActionTextJsonDictionary?: string;
  }

  export const GetPrilogAuditingLogInfo = createStructureInfo<Common.GetPrilogAuditingLog>(
    'Common/GetPrilogAuditingLog'
  );
  export interface GetPrilogAuditingLog {
    ID?: string;
    AdditionalIgnorePropertiesOnAnyAction?: string;
  }

  export const GridConfigurationInfo = createStructureInfo<Common.GridConfiguration>(
    'Common/GridConfiguration'
  );
  export interface GridConfiguration {
    ID: string;
    GridIdentificator: string;
    GridConfigurationInJSONFormat: string;
    CreatedAt?: Date;
    ModifiedAt?: Date;
    IsDefault?: boolean;
    AutoBind?: boolean;
    PrincipalID?: string;
  }

  export const MyConfigurationInfo = createStructureInfo<Common.MyConfiguration>(
    'Common/MyConfiguration'
  );
  export interface MyConfiguration {
    GridIdentificator?: string;
  }

  export const DefaultConfigurationInfo = createStructureInfo<Common.DefaultConfiguration>(
    'Common/DefaultConfiguration'
  );
  export interface DefaultConfiguration {
    GridIdentificator?: string;
  }

  export const SubmitGridConfigurationInfo = createStructureInfo<Common.SubmitGridConfiguration>(
    'Common/SubmitGridConfiguration'
  );
  export interface SubmitGridConfiguration {
    GridIdentificator: string;
    GridConfigurationInJSONFormat: string;
    IsDefault: boolean;
    AutoBind?: boolean;
  }

  export const AutoCodeCacheInfo = createStructureInfo<Common.AutoCodeCache>(
    'Common/AutoCodeCache'
  );
  export interface AutoCodeCache {
    ID: string;
    Entity?: string;
    Property?: string;
    Grouping?: string;
    Prefix?: string;
    MinDigits?: number;
    LastCode?: number;
  }

  export const FilterIdInfo = createStructureInfo<Common.FilterId>('Common/FilterId');
  export interface FilterId {
    ID: string;
    Handle?: string;
    Value?: string;
  }

  export const KeepSynchronizedMetadataInfo = createStructureInfo<Common.KeepSynchronizedMetadata>(
    'Common/KeepSynchronizedMetadata'
  );
  export interface KeepSynchronizedMetadata {
    ID: string;
    Target?: string;
    Source?: string;
    Context?: string;
  }

  export const ExclusiveLockInfo = createStructureInfo<Common.ExclusiveLock>(
    'Common/ExclusiveLock'
  );
  export interface ExclusiveLock {
    ID: string;
    ResourceType: string;
    ResourceID: string;
    UserName: string;
    Workstation: string;
    LockStart: Date;
    LockFinish: Date;
  }

  export const SetLockInfo = createStructureInfo<Common.SetLock>('Common/SetLock');
  export interface SetLock {
    ResourceType?: string;
    ResourceID?: string;
  }

  export const ReleaseLockInfo = createStructureInfo<Common.ReleaseLock>('Common/ReleaseLock');
  export interface ReleaseLock {
    ResourceType?: string;
    ResourceID?: string;
  }

  export const LogReaderInfo = createStructureInfo<Common.LogReader>('Common/LogReader');
  export interface LogReader {
    ID: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const LogRelatedItemReaderInfo = createStructureInfo<Common.LogRelatedItemReader>(
    'Common/LogRelatedItemReader'
  );
  export interface LogRelatedItemReader {
    ID: string;
    TableName?: string;
    Relation?: string;
    ItemId?: string;
    LogID: string;
  }

  export const LogInfo = createStructureInfo<Common.Log>('Common/Log');
  export interface Log {
    ID: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const AddToLogInfo = createStructureInfo<Common.AddToLog>('Common/AddToLog');
  export interface AddToLog {
    Action?: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const LogRelatedItemInfo = createStructureInfo<Common.LogRelatedItem>(
    'Common/LogRelatedItem'
  );
  export interface LogRelatedItem {
    ID: string;
    LogID: string;
    TableName?: string;
    ItemId?: string;
    Relation?: string;
  }

  export const RelatedEventsSourceInfo = createStructureInfo<Common.RelatedEventsSource>(
    'Common/RelatedEventsSource'
  );
  export interface RelatedEventsSource {
    ID: string;
    LogID?: string;
    Relation?: string;
    RelatedToTable?: string;
    RelatedToItem?: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const ClaimInfo = createStructureInfo<Common.Claim>('Common/Claim');
  export interface Claim {
    ID: string;
    ClaimResource: string;
    ClaimRight: string;
    Active?: boolean;
  }

  export const MyClaimInfo = createStructureInfo<Common.MyClaim>('Common/MyClaim');
  export interface MyClaim {
    ID: string;
    Applies?: boolean;
  }

  export const PrincipalInfo = createStructureInfo<Common.Principal>('Common/Principal');
  export interface Principal {
    ID: string;
    Name: string;
    ZupItUsername?: string;
  }

  export const PrincipalHasRoleInfo = createStructureInfo<Common.PrincipalHasRole>(
    'Common/PrincipalHasRole'
  );
  export interface PrincipalHasRole {
    ID: string;
    PrincipalID: string;
    RoleID: string;
  }

  export const RoleInfo = createStructureInfo<Common.Role>('Common/Role');
  export interface Role {
    ID: string;
    Name: string;
    RoleGroup: boolean;
    SystemUserBasicRole: boolean;
    AdministratorOmega: boolean;
  }

  export const RoleInheritsRoleInfo = createStructureInfo<Common.RoleInheritsRole>(
    'Common/RoleInheritsRole'
  );
  export interface RoleInheritsRole {
    ID: string;
    UsersFromID: string;
    PermissionsFromID: string;
  }

  export const PrincipalPermissionInfo = createStructureInfo<Common.PrincipalPermission>(
    'Common/PrincipalPermission'
  );
  export interface PrincipalPermission {
    ID: string;
    PrincipalID: string;
    ClaimID: string;
    IsAuthorized: boolean;
  }

  export const RolePermissionInfo = createStructureInfo<Common.RolePermission>(
    'Common/RolePermission'
  );
  export interface RolePermission {
    ID: string;
    RoleID: string;
    ClaimID: string;
    IsAuthorized: boolean;
  }

  export const RowPermissionsReadItemsInfo = createStructureInfo<Common.RowPermissionsReadItems>(
    'Common/RowPermissionsReadItems'
  );
  export interface RowPermissionsReadItems {}

  export const RowPermissionsWriteItemsInfo = createStructureInfo<Common.RowPermissionsWriteItems>(
    'Common/RowPermissionsWriteItems'
  );
  export interface RowPermissionsWriteItems {}

  export const StructureMetadataInfo = createStructureInfo<Common.StructureMetadata>(
    'Common/StructureMetadata'
  );
  export interface StructureMetadata {
    Value?: string;
  }

  export const GetStructureMetadataInfo = createStructureInfo<Common.GetStructureMetadata>(
    'Common/GetStructureMetadata'
  );
  export interface GetStructureMetadata {}

  export const GetStructureMetadataFunctionInfo = createFunctionInfo(
    GetStructureMetadataInfo,
    StructureMetadataInfo
  );

  export const ImpersonateInfo = createStructureInfo<Common.Impersonate>('Common/Impersonate');
  export interface Impersonate {
    UserName?: string;
  }

  export const StopImpersonatingInfo = createStructureInfo<Common.StopImpersonating>(
    'Common/StopImpersonating'
  );
  export interface StopImpersonating {}

  export const LoggedItemInfo = createStructureInfo<Common.LoggedItem>('Common/LoggedItem');
  export interface LoggedItem {
    TableName?: string;
    ItemId?: string;
  }

  export const DeletedItemsInfo = createStructureInfo<Common.DeletedItems>('Common/DeletedItems');
  export interface DeletedItems {
    TableName?: string;
  }

  export const LogEntryInfo = createStructureInfo<Common.LogEntry>('Common/LogEntry');
  export interface LogEntry {
    LogID?: string;
  }

  export const AuditRelatedEventsInfo = createStructureInfo<Common.AuditRelatedEvents>(
    'Common/AuditRelatedEvents'
  );
  export interface AuditRelatedEvents {
    ID: string;
    LogID?: string;
    Created?: Date;
    Action?: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
    ClientUserName?: string;
    ClientWorkstation?: string;
    Relation?: string;
    Summary?: string;
  }

  export const AuditDataModificationsInfo = createStructureInfo<Common.AuditDataModifications>(
    'Common/AuditDataModifications'
  );
  export interface AuditDataModifications {
    ID: string;
    LogID?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
    Modified?: boolean;
  }

  export const ReportTemplateInfo = createStructureInfo<Common.ReportTemplate>(
    'Common/ReportTemplate'
  );
  export interface ReportTemplate {
    ID: string;
    FileName: string;
    DisplayName: string;
  }

  export const PrincipalBrowseInfo = createStructureInfo<Common.PrincipalBrowse>(
    'Common/PrincipalBrowse'
  );
  export interface PrincipalBrowse {
    ID: string;
    ZupItUsername?: string;
    Name?: string;
    KorisnikSustava?: boolean;
    IsNotEmployee?: boolean;
  }

  export const PrincipalBrowseBaseInfo = createStructureInfo<Common.PrincipalBrowseBase>(
    'Common/PrincipalBrowseBase'
  );
  export interface PrincipalBrowseBase {
    ID: string;
    Name?: string;
    KorisnikSustava?: boolean;
    IsNotEmployee?: boolean;
  }

  export const PrincipalZaposlenikExtInfo = createStructureInfo<Common.PrincipalZaposlenikExt>(
    'Common/PrincipalZaposlenikExt'
  );
  export interface PrincipalZaposlenikExt {
    ID: string;
    ImePrezime?: string;
  }

  export const RoleGroupInfo = createStructureInfo<Common.RoleGroup>('Common/RoleGroup');
  export interface RoleGroup {
    ID: string;
    Naziv?: string;
  }

  export const ToggleRoleClaimInfo = createStructureInfo<Common.ToggleRoleClaim>(
    'Common/ToggleRoleClaim'
  );
  export interface ToggleRoleClaim {
    RoleID?: string;
    ClaimID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleClaimGroupInfo = createStructureInfo<Common.ToggleRoleClaimGroup>(
    'Common/ToggleRoleClaimGroup'
  );
  export interface ToggleRoleClaimGroup {
    RoleID?: string;
    ClaimGroupID?: string;
    Allowed?: boolean;
  }

  export const ToggleAllRoleClaimsInfo = createStructureInfo<Common.ToggleAllRoleClaims>(
    'Common/ToggleAllRoleClaims'
  );
  export interface ToggleAllRoleClaims {
    RoleID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleSelectedClaimsInfo = createStructureInfo<Common.ToggleRoleSelectedClaims>(
    'Common/ToggleRoleSelectedClaims'
  );
  export interface ToggleRoleSelectedClaims {
    RoleID?: string;
    ClaimGroupIDs?: string;
    Allowed?: boolean;
  }

  export const RoleBrowseViewInfo = createStructureInfo<Common.RoleBrowseView>(
    'Common/RoleBrowseView'
  );
  export interface RoleBrowseView {
    ID: string;
    Naziv?: string;
    OsnovnaRolaKorisnikaSustava?: boolean;
  }

  export const RoleGroupClaimsInfo = createStructureInfo<Common.RoleGroupClaims>(
    'Common/RoleGroupClaims'
  );
  export interface RoleGroupClaims {
    ID: string;
    RoleID?: string;
    ClaimResource?: string;
    HasAllRights?: boolean;
    HasSomeRights?: boolean;
  }

  export const RoleGroupAllClaimsInfo = createStructureInfo<Common.RoleGroupAllClaims>(
    'Common/RoleGroupAllClaims'
  );
  export interface RoleGroupAllClaims {
    ID: string;
    RoleID?: string;
    ClaimRight?: string;
    ClaimGroupID?: string;
    HasRight?: boolean;
  }

  export const RoleGroupRoleInfo = createStructureInfo<Common.RoleGroupRole>(
    'Common/RoleGroupRole'
  );
  export interface RoleGroupRole {
    ID: string;
    RoleID?: string;
    RoleGroupID?: string;
    Naziv?: string;
    HasGroup?: boolean;
  }

  export const ToggleRoleRoleGroupInfo = createStructureInfo<Common.ToggleRoleRoleGroup>(
    'Common/ToggleRoleRoleGroup'
  );
  export interface ToggleRoleRoleGroup {
    RoleID?: string;
    RoleGroupID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleSelectedRoleGroupsInfo = createStructureInfo<
    Common.ToggleRoleSelectedRoleGroups
  >('Common/ToggleRoleSelectedRoleGroups');
  export interface ToggleRoleSelectedRoleGroups {
    RoleID?: string;
    RoleGroupIDs?: string;
    Allowed?: boolean;
  }

  export const PrincipalHasRoleViewInfo = createStructureInfo<Common.PrincipalHasRoleView>(
    'Common/PrincipalHasRoleView'
  );
  export interface PrincipalHasRoleView {
    ID: string;
    ZaposlenikID?: string;
    RoleID?: string;
    PrincipalID?: string;
    RoleName?: string;
    HasRole?: boolean;
  }

  export const HideRoleKorisnikSustavaInfo = createStructureInfo<Common.HideRoleKorisnikSustava>(
    'Common/HideRoleKorisnikSustava'
  );
  export interface HideRoleKorisnikSustava {}

  export const HideRoleOmegaAdministratorInfo = createStructureInfo<
    Common.HideRoleOmegaAdministrator
  >('Common/HideRoleOmegaAdministrator');
  export interface HideRoleOmegaAdministrator {}

  export const ZaposlenikPrincipalViewInfo = createStructureInfo<Common.ZaposlenikPrincipalView>(
    'Common/ZaposlenikPrincipalView'
  );
  export interface ZaposlenikPrincipalView {
    ID: string;
    PrincipalID?: string;
    PrincipalName?: string;
  }

  export const AddRemovePrincipalRoleInfo = createStructureInfo<Common.AddRemovePrincipalRole>(
    'Common/AddRemovePrincipalRole'
  );
  export interface AddRemovePrincipalRole {
    RoleID?: string;
    PrincipalID?: string;
    HasRole?: boolean;
  }

  export const SmartSearchInfo = createStructureInfo<Common.SmartSearch>('Common/SmartSearch');
  export interface SmartSearch {
    Pattern?: string;
  }

  export const OlderThanHistoryEntriesInfo = createStructureInfo<Common.OlderThanHistoryEntries>(
    'Common/OlderThanHistoryEntries'
  );
  export interface OlderThanHistoryEntries {}

  export const NewerThanCurrentEntryInfo = createStructureInfo<Common.NewerThanCurrentEntry>(
    'Common/NewerThanCurrentEntry'
  );
  export interface NewerThanCurrentEntry {}

  export const RoleGroupRoleCheckInfo = createStructureInfo<Common.RoleGroupRoleCheck>(
    'Common/RoleGroupRoleCheck'
  );
  export interface RoleGroupRoleCheck {}

  export const ZupItUsernameUniqueInfo = createStructureInfo<Common.ZupItUsernameUnique>(
    'Common/ZupItUsernameUnique'
  );
  export interface ZupItUsernameUnique {}

  export const SystemRequiredAutoBindInfo = createStructureInfo<Common.SystemRequiredAutoBind>(
    'Common/SystemRequiredAutoBind'
  );
  export interface SystemRequiredAutoBind {}

  export const SystemRequiredActiveInfo = createStructureInfo<Common.SystemRequiredActive>(
    'Common/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}

  export const SystemRequiredLogInfo = createStructureInfo<Common.SystemRequiredLog>(
    'Common/SystemRequiredLog'
  );
  export interface SystemRequiredLog {}

  export const SystemRequiredPrincipalInfo = createStructureInfo<Common.SystemRequiredPrincipal>(
    'Common/SystemRequiredPrincipal'
  );
  export interface SystemRequiredPrincipal {}

  export const SystemRequiredUsersFromInfo = createStructureInfo<Common.SystemRequiredUsersFrom>(
    'Common/SystemRequiredUsersFrom'
  );
  export interface SystemRequiredUsersFrom {}

  export const SystemRequiredClaimInfo = createStructureInfo<Common.SystemRequiredClaim>(
    'Common/SystemRequiredClaim'
  );
  export interface SystemRequiredClaim {}

  export const SystemRequiredRoleInfo = createStructureInfo<Common.SystemRequiredRole>(
    'Common/SystemRequiredRole'
  );
  export interface SystemRequiredRole {}
}

export module Adresar {
  export const BrojcanaOznakaStvarateljaPismenaInfo = createStructureInfo<
    Adresar.BrojcanaOznakaStvarateljaPismena
  >('Adresar/BrojcanaOznakaStvarateljaPismena');
  export interface BrojcanaOznakaStvarateljaPismena {
    ID: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Active?: boolean;
  }

  export const BrojcanaOznakaStvarateljaPismenaLookupInfo = createStructureInfo<
    Adresar.BrojcanaOznakaStvarateljaPismenaLookup
  >('Adresar/BrojcanaOznakaStvarateljaPismenaLookup');
  export interface BrojcanaOznakaStvarateljaPismenaLookup {
    ID: string;
    Active?: boolean;
    BrojcanaOznaka?: string;
    Naziv?: string;
  }

  export const BrojcanaOznakaStvarateljaPismenaQuickSearchInfo = createStructureInfo<
    Adresar.BrojcanaOznakaStvarateljaPismenaQuickSearch
  >('Adresar/BrojcanaOznakaStvarateljaPismenaQuickSearch');
  export interface BrojcanaOznakaStvarateljaPismenaQuickSearch {
    Pattern?: string;
  }

  export const MjestoInfo = createStructureInfo<Adresar.Mjesto>('Adresar/Mjesto');
  export interface Mjesto {
    ID: string;
    Naziv: string;
    ZupanijaID?: string;
    DrzavaID: string;
    Active?: boolean;
  }

  export const MjestoBrowseInfo = createStructureInfo<Adresar.MjestoBrowse>('Adresar/MjestoBrowse');
  export interface MjestoBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    ZupanijaNaziv?: string;
    DrzavaKratkiNaziv?: string;
    DrzavaDvoslovnaOznaka?: string;
    DrzavaTroslovnaOznaka?: string;
    DrzavaBrojcanaOznaka?: string;
  }

  export const MjestoLookupInfo = createStructureInfo<Adresar.MjestoLookup>('Adresar/MjestoLookup');
  export interface MjestoLookup {
    ID: string;
    Active?: boolean;
    Naziv?: string;
    ZupanijaNaziv?: string;
    ZupanijaID?: string;
    DrzavaKratkiNaziv?: string;
    DrzavaSluzbeniNaziv?: string;
    DrzavaDvoslovnaOznaka?: string;
    DrzavaTroslovnaOznaka?: string;
    DrzavaBrojcanaOznaka?: string;
    DrzavaKratkiNazivNaEngleskom?: string;
    DrzavaID?: string;
  }

  export const MjestoQuickSearchInfo = createStructureInfo<Adresar.MjestoQuickSearch>(
    'Adresar/MjestoQuickSearch'
  );
  export interface MjestoQuickSearch {
    Pattern?: string;
    DrzavaID?: string;
  }

  export const ZupanijaInfo = createStructureInfo<Adresar.Zupanija>('Adresar/Zupanija');
  export interface Zupanija {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const ZupanijaBrowseInfo = createStructureInfo<Adresar.ZupanijaBrowse>(
    'Adresar/ZupanijaBrowse'
  );
  export interface ZupanijaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const DrzavaInfo = createStructureInfo<Adresar.Drzava>('Adresar/Drzava');
  export interface Drzava {
    ID: string;
    KratkiNaziv: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka: string;
    TroslovnaOznaka: string;
    BrojcanaOznaka: string;
    KratkiNazivNaEngleskom?: string;
    SluzbeniNazivNaEngleskom?: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const DrzavaBrowseInfo = createStructureInfo<Adresar.DrzavaBrowse>('Adresar/DrzavaBrowse');
  export interface DrzavaBrowse {
    ID: string;
    KratkiNaziv?: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka?: string;
    TroslovnaOznaka?: string;
    BrojcanaOznaka?: string;
    KratkiNazivNaEngleskom?: string;
    SluzbeniNazivNaEngleskom?: string;
    Active?: boolean;
  }

  export const DrzavaLookupInfo = createStructureInfo<Adresar.DrzavaLookup>('Adresar/DrzavaLookup');
  export interface DrzavaLookup {
    ID: string;
    Active?: boolean;
    KratkiNaziv?: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka?: string;
    TroslovnaOznaka?: string;
    BrojcanaOznaka?: string;
    KratkiNazivNaEngleskom?: string;
  }

  export const DrzavaQuickSearchInfo = createStructureInfo<Adresar.DrzavaQuickSearch>(
    'Adresar/DrzavaQuickSearch'
  );
  export interface DrzavaQuickSearch {
    Pattern?: string;
  }

  export const DostavnaPostaInfo = createStructureInfo<Adresar.DostavnaPosta>(
    'Adresar/DostavnaPosta'
  );
  export interface DostavnaPosta {
    ID: string;
    Naziv: string;
    PostanskiBroj: string;
    Active?: boolean;
  }

  export const DostavnaPostaDrzavaInfo = createStructureInfo<Adresar.DostavnaPostaDrzava>(
    'Adresar/DostavnaPostaDrzava'
  );
  export interface DostavnaPostaDrzava {
    ID: string;
    DrzavaIDs?: string;
  }

  export const DostavnaPostaBrowseInfo = createStructureInfo<Adresar.DostavnaPostaBrowse>(
    'Adresar/DostavnaPostaBrowse'
  );
  export interface DostavnaPostaBrowse {
    ID: string;
    Naziv?: string;
    PostanskiBroj?: string;
    Active?: boolean;
  }

  export const DostavnaPostaLookupInfo = createStructureInfo<Adresar.DostavnaPostaLookup>(
    'Adresar/DostavnaPostaLookup'
  );
  export interface DostavnaPostaLookup {
    ID: string;
    Active?: boolean;
    Naziv?: string;
    PostanskiBroj?: string;
    DrzavaIDs?: string;
  }

  export const DostavnaPostaQuickSearchInfo = createStructureInfo<Adresar.DostavnaPostaQuickSearch>(
    'Adresar/DostavnaPostaQuickSearch'
  );
  export interface DostavnaPostaQuickSearch {
    Pattern?: string;
    DrzavaID?: string;
  }

  export const NaseljeInfo = createStructureInfo<Adresar.Naselje>('Adresar/Naselje');
  export interface Naselje {
    ID: string;
    Naziv: string;
    MjestoID: string;
    DostavnaPostaID: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const NaseljeBrowseInfo = createStructureInfo<Adresar.NaseljeBrowse>(
    'Adresar/NaseljeBrowse'
  );
  export interface NaseljeBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    MjestoNaziv?: string;
    DostavnaPostaNaziv?: string;
    DostavnaPostaPostanskiBroj?: string;
  }

  export const NaseljeLookupInfo = createStructureInfo<Adresar.NaseljeLookup>(
    'Adresar/NaseljeLookup'
  );
  export interface NaseljeLookup {
    ID: string;
    Active?: boolean;
    Naziv?: string;
    MjestoNaziv?: string;
    MjestoZupanijaNaziv?: string;
    MjestoDrzavaKratkiNaziv?: string;
    MjestoDrzavaSluzbeniNaziv?: string;
    MjestoDrzavaDvoslovnaOznaka?: string;
    MjestoDrzavaTroslovnaOznaka?: string;
    MjestoDrzavaBrojcanaOznaka?: string;
    MjestoDrzavaKratkiNazivNaEngleskom?: string;
    MjestoID?: string;
    PostanskiBroj?: string;
    DrzavaID?: string;
    NaseljePostanskiBroj?: string;
  }

  export const NaseljeQuickSearchInfo = createStructureInfo<Adresar.NaseljeQuickSearch>(
    'Adresar/NaseljeQuickSearch'
  );
  export interface NaseljeQuickSearch {
    Pattern?: string;
  }

  export const QuickInsertNaseljeInfo = createStructureInfo<Adresar.QuickInsertNaselje>(
    'Adresar/QuickInsertNaselje'
  );
  export interface QuickInsertNaselje {
    NaseljeID: string;
    DrzavaID: string;
    NazivMjesta: string;
    PostanskiBroj: string;
    NazivNaselja?: string;
    NazivDostavnePoste?: string;
  }

  export const AdresaInfo = createStructureInfo<Adresar.Adresa>('Adresar/Adresa');
  export interface Adresa {
    ID: string;
    DrzavaID: string;
    UlicaIKucniBroj?: string;
    MjestoID?: string;
    NaseljeID: string;
    IsDefault?: boolean;
    KontaktID?: string;
  }

  export const DefaultAdresaByKontaktIDInfo = createStructureInfo<Adresar.DefaultAdresaByKontaktID>(
    'Adresar/DefaultAdresaByKontaktID'
  );
  export interface DefaultAdresaByKontaktID {
    KontaktID?: string;
    Pattern?: string;
  }

  export const DefaultAdresaByKontaktIDsInfo = createStructureInfo<
    Adresar.DefaultAdresaByKontaktIDs
  >('Adresar/DefaultAdresaByKontaktIDs');
  export interface DefaultAdresaByKontaktIDs {
    KontaktIDsListJson?: string;
  }

  export const AdresaBrowseInfo = createStructureInfo<Adresar.AdresaBrowse>('Adresar/AdresaBrowse');
  export interface AdresaBrowse {
    ID: string;
    UlicaIKucniBroj?: string;
    IsDefault?: boolean;
    KontaktID?: string;
    DrzavaKratkiNaziv?: string;
    MjestoNaziv?: string;
    NaseljeNaziv?: string;
  }

  export const AdresaExtendedInfo = createStructureInfo<Adresar.AdresaExtended>(
    'Adresar/AdresaExtended'
  );
  export interface AdresaExtended {
    ID: string;
    UlicaIKucniBroj?: string;
    UlicaIKucniBrojMjestoDrzava?: string;
    MjestoNaziv?: string;
    DrzavaNaziv?: string;
  }

  export const OsnovniSubjektAktivacijaEventInfo = createStructureInfo<
    Adresar.OsnovniSubjektAktivacijaEvent
  >('Adresar/OsnovniSubjektAktivacijaEvent');
  export interface OsnovniSubjektAktivacijaEvent {
    ID: string;
    DatumKreiranja?: Date;
    OsnovniSubjektID: string;
    KorisnikID?: string;
  }

  export const OsnovniSubjektDeaktivacijaEventInfo = createStructureInfo<
    Adresar.OsnovniSubjektDeaktivacijaEvent
  >('Adresar/OsnovniSubjektDeaktivacijaEvent');
  export interface OsnovniSubjektDeaktivacijaEvent {
    ID: string;
    DatumKreiranja?: Date;
    OsnovniSubjektID: string;
    KorisnikID?: string;
  }

  export const OsnovniSubjektAktivnostLogInfo = createStructureInfo<
    Adresar.OsnovniSubjektAktivnostLog
  >('Adresar/OsnovniSubjektAktivnostLog');
  export interface OsnovniSubjektAktivnostLog {
    ID: string;
    Active?: boolean;
    DatumKreiranja?: Date;
    OsnovniSubjektID?: string;
  }

  export const OsnovniSubjektEventDataInfo = createStructureInfo<Adresar.OsnovniSubjektEventData>(
    'Adresar/OsnovniSubjektEventData'
  );
  export interface OsnovniSubjektEventData {
    ID: string;
    Active?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektEventDataPersistedInfo = createStructureInfo<
    Adresar.OsnovniSubjektEventDataPersisted
  >('Adresar/OsnovniSubjektEventDataPersisted');
  export interface OsnovniSubjektEventDataPersisted {
    ID: string;
    Active?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektInfo = createStructureInfo<Adresar.OsnovniSubjekt>(
    'Adresar/OsnovniSubjekt'
  );
  export interface OsnovniSubjekt {
    ID: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    EntityID?: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
  }

  export const DuplicateOIBInfo = createStructureInfo<Adresar.DuplicateOIB>('Adresar/DuplicateOIB');
  export interface DuplicateOIB {}

  export const MoguciNadredeniSubjektiInfo = createStructureInfo<Adresar.MoguciNadredeniSubjekti>(
    'Adresar/MoguciNadredeniSubjekti'
  );
  export interface MoguciNadredeniSubjekti {
    ID?: string;
    Pattern?: string;
  }

  export const SamoAktivniSubjektiInfo = createStructureInfo<Adresar.SamoAktivniSubjekti>(
    'Adresar/SamoAktivniSubjekti'
  );
  export interface SamoAktivniSubjekti {}

  export const OsnovniSubjektQuickSearchInfo = createStructureInfo<
    Adresar.OsnovniSubjektQuickSearch
  >('Adresar/OsnovniSubjektQuickSearch');
  export interface OsnovniSubjektQuickSearch {
    Pattern?: string;
  }

  export const PravnaOsobaInfo = createStructureInfo<Adresar.PravnaOsoba>('Adresar/PravnaOsoba');
  export interface PravnaOsoba {
    ID: string;
    Naziv: string;
    MB?: string;
    MBS?: string;
  }

  export const DuplicateMBInfo = createStructureInfo<Adresar.DuplicateMB>('Adresar/DuplicateMB');
  export interface DuplicateMB {}

  export const DuplicateMBSInfo = createStructureInfo<Adresar.DuplicateMBS>('Adresar/DuplicateMBS');
  export interface DuplicateMBS {}

  export const UpsertPravnaOsobaInfo = createStructureInfo<Adresar.UpsertPravnaOsoba>(
    'Adresar/UpsertPravnaOsoba'
  );
  export interface UpsertPravnaOsoba {
    ID: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Naziv: string;
    MB?: string;
    MBS?: string;
    IsNew?: boolean;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
    EntityID?: string;
  }

  export const KreirajNovuVerzijuPravnaOsobaInfo = createStructureInfo<
    Adresar.KreirajNovuVerzijuPravnaOsoba
  >('Adresar/KreirajNovuVerzijuPravnaOsoba');
  export interface KreirajNovuVerzijuPravnaOsoba {
    ID?: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Naziv: string;
    MB?: string;
    MBS?: string;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
    VerzijaNastalaIzID?: string;
  }

  export const KreirajNovuVerzijuFizickaOsobaInfo = createStructureInfo<
    Adresar.KreirajNovuVerzijuFizickaOsoba
  >('Adresar/KreirajNovuVerzijuFizickaOsoba');
  export interface KreirajNovuVerzijuFizickaOsoba {
    ID?: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Ime: string;
    Prezime: string;
    MBG?: string;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
    VerzijaNastalaIzID?: string;
  }

  export const FizickaOsobaInfo = createStructureInfo<Adresar.FizickaOsoba>('Adresar/FizickaOsoba');
  export interface FizickaOsoba {
    ID: string;
    Ime: string;
    Prezime: string;
    MBG?: string;
  }

  export const DuplicateMBGInfo = createStructureInfo<Adresar.DuplicateMBG>('Adresar/DuplicateMBG');
  export interface DuplicateMBG {}

  export const UpsertFizickaOsobaInfo = createStructureInfo<Adresar.UpsertFizickaOsoba>(
    'Adresar/UpsertFizickaOsoba'
  );
  export interface UpsertFizickaOsoba {
    ID: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Ime: string;
    Prezime: string;
    MBG?: string;
    IsNew?: boolean;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
    EntityID?: string;
  }

  export const OsnovniSubjektComputedInfo = createStructureInfo<Adresar.OsnovniSubjektComputed>(
    'Adresar/OsnovniSubjektComputed'
  );
  export interface OsnovniSubjektComputed {
    ID: string;
    NazivSubjekta?: string;
    NazivSubjektaIMjesto?: string;
    JeNadredjeni?: boolean;
    JeZadnjaVerzija?: boolean;
  }

  export const OsnovniSubjektPersistedInfo = createStructureInfo<Adresar.OsnovniSubjektPersisted>(
    'Adresar/OsnovniSubjektPersisted'
  );
  export interface OsnovniSubjektPersisted {
    ID: string;
    NazivSubjekta?: string;
    NazivSubjektaIMjesto?: string;
    JeNadredjeni?: boolean;
    JeZadnjaVerzija?: boolean;
  }

  export const OsnovniSubjektExtendedInfo = createStructureInfo<Adresar.OsnovniSubjektExtended>(
    'Adresar/OsnovniSubjektExtended'
  );
  export interface OsnovniSubjektExtended {
    ID: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    MjestoINaziv?: string;
    DrzavaNaziv?: string;
    DrzavaFromAdresaNaziv?: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID?: string;
    OIB?: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaNaziv?: string;
    Active?: boolean;
    NadredeniSubjektID?: string;
    JeNadredjeni?: boolean;
    EntityID?: string;
    DatumKreiranja?: Date;
    PostanskiBroj?: string;
    JeZadnjaVerzija?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektLookupInfo = createStructureInfo<Adresar.OsnovniSubjektLookup>(
    'Adresar/OsnovniSubjektLookup'
  );
  export interface OsnovniSubjektLookup {
    ID: string;
    BrojcanaOznakaStvarateljaNaziv?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    AdresaUlicaIKucniBroj?: string;
    Active?: boolean;
    NadredeniSubjektID?: string;
    OIB?: string;
    ToRecompileID?: string;
  }

  export const OS_WithRecompileInfo = createStructureInfo<Adresar.OS_WithRecompile>(
    'Adresar/OS_WithRecompile'
  );
  export interface OS_WithRecompile {
    ID: string;
    aa?: boolean;
  }

  export const OsnovniSubjektPovezaniInfo = createStructureInfo<Adresar.OsnovniSubjektPovezani>(
    'Adresar/OsnovniSubjektPovezani'
  );
  export interface OsnovniSubjektPovezani {
    ID: string;
    OIB?: string;
    NazivSubjekta?: string;
    NadredeniSubjektID?: string;
    _WithRecompile?: boolean;
  }

  export const OsnovniSubjektPovezaniBrowseInfo = createStructureInfo<
    Adresar.OsnovniSubjektPovezaniBrowse
  >('Adresar/OsnovniSubjektPovezaniBrowse');
  export interface OsnovniSubjektPovezaniBrowse {
    ID: string;
    NazivSubjekta?: string;
    NadredeniSubjektID?: string;
    _WithRecompile?: boolean;
    OIB?: string;
  }

  export const PovezaniSubjektiInfo = createStructureInfo<Adresar.PovezaniSubjekti>(
    'Adresar/PovezaniSubjekti'
  );
  export interface PovezaniSubjekti {
    OsnovniSubjektID?: string;
  }

  export const OsnovniSubjektBrowseInfo = createStructureInfo<Adresar.OsnovniSubjektBrowse>(
    'Adresar/OsnovniSubjektBrowse'
  );
  export interface OsnovniSubjektBrowse {
    ID: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaNaziv?: string;
    TipSubjektaID?: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    MjestoINaziv?: string;
    DrzavaNaziv?: string;
    Active?: boolean;
    EntityID?: string;
    DatumKreiranja?: Date;
    JeZadnjaVerzija?: boolean;
    NekiID?: string;
    OIB?: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
  }

  export const OsnovniSubjektBrowseIdsOnlyInfo = createStructureInfo<
    Adresar.OsnovniSubjektBrowseIdsOnly
  >('Adresar/OsnovniSubjektBrowseIdsOnly');
  export interface OsnovniSubjektBrowseIdsOnly {
    IDs?: string;
  }

  export const AdresaPrimateljaLookupInfo = createStructureInfo<Adresar.AdresaPrimateljaLookup>(
    'Adresar/AdresaPrimateljaLookup'
  );
  export interface AdresaPrimateljaLookup {
    ID: string;
    MjestoNaziv?: string;
    DrzavaNaziv?: string;
    NaseljeID?: string;
    UlicaIKucniBroj?: string;
    UlicaIKucniBrojMjestoDrzava?: string;
  }

  export const AdresaByKontaktIDAndPatternInfo = createStructureInfo<
    Adresar.AdresaByKontaktIDAndPattern
  >('Adresar/AdresaByKontaktIDAndPattern');
  export interface AdresaByKontaktIDAndPattern {
    Pattern?: string;
    PrimateljID?: string;
  }

  export const AdresaLookupInfo = createStructureInfo<Adresar.AdresaLookup>('Adresar/AdresaLookup');
  export interface AdresaLookup {
    ID: string;
    KontaktExtension_OsnovniSubjektExtendedNazivSubjekta?: string;
    KontaktExtension_OsnovniSubjektExtendedNazivMjesto?: string;
  }

  export const AdresaByKontaktIDInfo = createStructureInfo<Adresar.AdresaByKontaktID>(
    'Adresar/AdresaByKontaktID'
  );
  export interface AdresaByKontaktID {
    Pattern?: string;
  }

  export const KontaktDetaljInfo = createStructureInfo<Adresar.KontaktDetalj>(
    'Adresar/KontaktDetalj'
  );
  export interface KontaktDetalj {
    ID: string;
    KontaktID: string;
    Vrijednost: string;
    Oznaka?: string;
    IsDefault?: boolean;
    VrstaKontaktDetaljaID: string;
  }

  export const KontaktDetaljBrowseInfo = createStructureInfo<Adresar.KontaktDetaljBrowse>(
    'Adresar/KontaktDetaljBrowse'
  );
  export interface KontaktDetaljBrowse {
    ID: string;
    Oznaka?: string;
    Vrijednost?: string;
    KontaktID?: string;
    IsDefault?: boolean;
    VrstaKontaktDetaljaNaziv?: string;
  }

  export const VrstaKontaktDetaljaInfo = createStructureInfo<Adresar.VrstaKontaktDetalja>(
    'Adresar/VrstaKontaktDetalja'
  );
  export interface VrstaKontaktDetalja {
    ID: string;
    Naziv: string;
    ValidationRegularExpression?: string;
    ValidationErrorMessage?: string;
    MustBeDefault?: boolean;
    Active?: boolean;
  }

  export const VrstaKontaktDetaljaBrowseInfo = createStructureInfo<
    Adresar.VrstaKontaktDetaljaBrowse
  >('Adresar/VrstaKontaktDetaljaBrowse');
  export interface VrstaKontaktDetaljaBrowse {
    ID: string;
    Naziv?: string;
    ValidationRegularExpression?: string;
    ValidationErrorMessage?: string;
    MustBeDefault?: boolean;
    Active?: boolean;
  }

  export const PromijeniVrstuSubjektaInfo = createStructureInfo<Adresar.PromijeniVrstuSubjekta>(
    'Adresar/PromijeniVrstuSubjekta'
  );
  export interface PromijeniVrstuSubjekta {
    SubjektId?: string;
  }

  export const OsnovniSubjektBrowseFilterInfo = createStructureInfo<
    Adresar.OsnovniSubjektBrowseFilter
  >('Adresar/OsnovniSubjektBrowseFilter');
  export interface OsnovniSubjektBrowseFilter {
    Pattern?: string;
    NazivSubjekta?: string;
    DrzavaNaziv?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    OIB?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaID?: string;
  }

  export const KontaktiFtsComputedInfo = createStructureInfo<Adresar.KontaktiFtsComputed>(
    'Adresar/KontaktiFtsComputed'
  );
  export interface KontaktiFtsComputed {
    ID: string;
    FtsContent?: string;
  }

  export const KontaktiFTSInfo = createStructureInfo<Adresar.KontaktiFTS>('Adresar/KontaktiFTS');
  export interface KontaktiFTS {
    ID: string;
    FtsContent?: string;
  }

  export const SubjektaPromijeniTipInfo = createStructureInfo<Adresar.SubjektaPromijeniTip>(
    'Adresar/SubjektaPromijeniTip'
  );
  export interface SubjektaPromijeniTip {
    ID: string;
    OsnovniSubjektID: string;
    DatumKreiranja?: Date;
    TipSubjektaID: string;
    KorisnikID?: string;
  }

  export const SubjektaPromijeniTipBrowseInfo = createStructureInfo<
    Adresar.SubjektaPromijeniTipBrowse
  >('Adresar/SubjektaPromijeniTipBrowse');
  export interface SubjektaPromijeniTipBrowse {
    ID: string;
    OsnovniSubjektID?: string;
    TipSubjektaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const TipSubjektaInfo = createStructureInfo<Adresar.TipSubjekta>('Adresar/TipSubjekta');
  export interface TipSubjekta {
    ID: string;
    Naziv: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
  }

  export const TipSubjektaLookupInfo = createStructureInfo<Adresar.TipSubjektaLookup>(
    'Adresar/TipSubjektaLookup'
  );
  export interface TipSubjektaLookup {
    ID: string;
    Active?: boolean;
    Naziv?: string;
    JePravnaOsoba?: boolean;
  }

  export const TipSubjektaExtendedInfo = createStructureInfo<Adresar.TipSubjektaExtended>(
    'Adresar/TipSubjektaExtended'
  );
  export interface TipSubjektaExtended {
    ID: string;
    Naziv?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
    IsPredefiniraniTip?: boolean;
  }

  export const TipSubjektaBrowseInfo = createStructureInfo<Adresar.TipSubjektaBrowse>(
    'Adresar/TipSubjektaBrowse'
  );
  export interface TipSubjektaBrowse {
    ID: string;
    IsPredefiniraniTip?: boolean;
    Naziv?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
  }

  export const TipSubjektaLookupFilterInfo = createStructureInfo<Adresar.TipSubjektaLookupFilter>(
    'Adresar/TipSubjektaLookupFilter'
  );
  export interface TipSubjektaLookupFilter {
    JePravnaOsoba?: boolean;
  }

  export const PredefiniraniTipSubjektaInfo = createStructureInfo<Adresar.PredefiniraniTipSubjekta>(
    'Adresar/PredefiniraniTipSubjekta'
  );
  export interface PredefiniraniTipSubjekta {
    ID: string;
    ActionDate?: Date;
    TipSubjektaID?: string;
    ExecutedByID?: string;
  }

  export const OsnovniSubjektCustomFieldsSearchInfo = createStructureInfo<
    Adresar.OsnovniSubjektCustomFieldsSearch
  >('Adresar/OsnovniSubjektCustomFieldsSearch');
  export interface OsnovniSubjektCustomFieldsSearch {}

  export const CtxKontaktInfo = createStructureInfo<Adresar.CtxKontakt>('Adresar/CtxKontakt');
  export interface CtxKontakt {
    ID: string;
    CtxId?: number;
  }

  export const SubjektForConnectorInfo = createStructureInfo<Adresar.SubjektForConnector>(
    'Adresar/SubjektForConnector'
  );
  export interface SubjektForConnector {
    ID: string;
    SubjektEntityID?: string;
    SubjektCtxId?: number;
    PravnaOsoba?: boolean;
    Oib?: string;
    Naziv?: string;
    Adresa?: string;
    PostanskiBroj?: string;
    Mjesto?: string;
    Drzava?: string;
    BrojcanaOznaka?: string;
  }

  export const NaseljeFindByNazivAndPostanskiBrojInfo = createStructureInfo<
    Adresar.NaseljeFindByNazivAndPostanskiBroj
  >('Adresar/NaseljeFindByNazivAndPostanskiBroj');
  export interface NaseljeFindByNazivAndPostanskiBroj {
    Pattern?: string;
  }

  export const NaseljeLookupExInfo = createStructureInfo<Adresar.NaseljeLookupEx>(
    'Adresar/NaseljeLookupEx'
  );
  export interface NaseljeLookupEx {
    ID: string;
    NaseljePostanskiBroj?: string;
  }

  export const ZupanijaLookupInfo = createStructureInfo<Adresar.ZupanijaLookup>(
    'Adresar/ZupanijaLookup'
  );
  export interface ZupanijaLookup {
    ID: string;
    Naziv?: string;
  }

  export const PravnaOsobaLookupInfo = createStructureInfo<Adresar.PravnaOsobaLookup>(
    'Adresar/PravnaOsobaLookup'
  );
  export interface PravnaOsobaLookup {
    ID: string;
    Naziv?: string;
  }

  export const VrstaKontaktDetaljaLookupInfo = createStructureInfo<
    Adresar.VrstaKontaktDetaljaLookup
  >('Adresar/VrstaKontaktDetaljaLookup');
  export interface VrstaKontaktDetaljaLookup {
    ID: string;
    Naziv?: string;
  }

  export const MBG_MbgFilterInfo = createStructureInfo<Adresar.MBG_MbgFilter>(
    'Adresar/MBG_MbgFilter'
  );
  export interface MBG_MbgFilter {}

  export const OIB_Mod11_10FilterInfo = createStructureInfo<Adresar.OIB_Mod11_10Filter>(
    'Adresar/OIB_Mod11_10Filter'
  );
  export interface OIB_Mod11_10Filter {}

  export const DvoslovnaOznaka_RegExMatchFilterInfo = createStructureInfo<
    Adresar.DvoslovnaOznaka_RegExMatchFilter
  >('Adresar/DvoslovnaOznaka_RegExMatchFilter');
  export interface DvoslovnaOznaka_RegExMatchFilter {}

  export const TroslovnaOznaka_RegExMatchFilterInfo = createStructureInfo<
    Adresar.TroslovnaOznaka_RegExMatchFilter
  >('Adresar/TroslovnaOznaka_RegExMatchFilter');
  export interface TroslovnaOznaka_RegExMatchFilter {}

  export const BrojcanaOznaka_RegExMatchFilterInfo = createStructureInfo<
    Adresar.BrojcanaOznaka_RegExMatchFilter
  >('Adresar/BrojcanaOznaka_RegExMatchFilter');
  export interface BrojcanaOznaka_RegExMatchFilter {}

  export const MB_RegExMatchFilterInfo = createStructureInfo<Adresar.MB_RegExMatchFilter>(
    'Adresar/MB_RegExMatchFilter'
  );
  export interface MB_RegExMatchFilter {}

  export const MBS_RegExMatchFilterInfo = createStructureInfo<Adresar.MBS_RegExMatchFilter>(
    'Adresar/MBS_RegExMatchFilter'
  );
  export interface MBS_RegExMatchFilter {}

  export const MBG_RegExMatchFilterInfo = createStructureInfo<Adresar.MBG_RegExMatchFilter>(
    'Adresar/MBG_RegExMatchFilter'
  );
  export interface MBG_RegExMatchFilter {}

  export const OIB_RegExMatchFilterInfo = createStructureInfo<Adresar.OIB_RegExMatchFilter>(
    'Adresar/OIB_RegExMatchFilter'
  );
  export interface OIB_RegExMatchFilter {}

  export const MaxJednaAktivnaVerzijaInfo = createStructureInfo<Adresar.MaxJednaAktivnaVerzija>(
    'Adresar/MaxJednaAktivnaVerzija'
  );
  export interface MaxJednaAktivnaVerzija {}

  export const SamoZadnjaVerzijaAktivnaInfo = createStructureInfo<Adresar.SamoZadnjaVerzijaAktivna>(
    'Adresar/SamoZadnjaVerzijaAktivna'
  );
  export interface SamoZadnjaVerzijaAktivna {}

  export const ValidForJePravnaOsobaInfo = createStructureInfo<Adresar.ValidForJePravnaOsoba>(
    'Adresar/ValidForJePravnaOsoba'
  );
  export interface ValidForJePravnaOsoba {}

  export const ValidTipSubjektaForJePravnaOsobaInfo = createStructureInfo<
    Adresar.ValidTipSubjektaForJePravnaOsoba
  >('Adresar/ValidTipSubjektaForJePravnaOsoba');
  export interface ValidTipSubjektaForJePravnaOsoba {}

  export const DvoslovnaOznaka_MaxLengthFilterInfo = createStructureInfo<
    Adresar.DvoslovnaOznaka_MaxLengthFilter
  >('Adresar/DvoslovnaOznaka_MaxLengthFilter');
  export interface DvoslovnaOznaka_MaxLengthFilter {}

  export const TroslovnaOznaka_MaxLengthFilterInfo = createStructureInfo<
    Adresar.TroslovnaOznaka_MaxLengthFilter
  >('Adresar/TroslovnaOznaka_MaxLengthFilter');
  export interface TroslovnaOznaka_MaxLengthFilter {}

  export const DvoslovnaOznaka_MinLengthFilterInfo = createStructureInfo<
    Adresar.DvoslovnaOznaka_MinLengthFilter
  >('Adresar/DvoslovnaOznaka_MinLengthFilter');
  export interface DvoslovnaOznaka_MinLengthFilter {}

  export const TroslovnaOznaka_MinLengthFilterInfo = createStructureInfo<
    Adresar.TroslovnaOznaka_MinLengthFilter
  >('Adresar/TroslovnaOznaka_MinLengthFilter');
  export interface TroslovnaOznaka_MinLengthFilter {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    Adresar.SystemRequiredDatumKreiranja
  >('Adresar/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredEntityIDInfo = createStructureInfo<Adresar.SystemRequiredEntityID>(
    'Adresar/SystemRequiredEntityID'
  );
  export interface SystemRequiredEntityID {}

  export const SystemRequiredCtxIdInfo = createStructureInfo<Adresar.SystemRequiredCtxId>(
    'Adresar/SystemRequiredCtxId'
  );
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveInfo = createStructureInfo<Adresar.SystemRequiredActive>(
    'Adresar/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}

  export const SystemRequiredKontaktInfo = createStructureInfo<Adresar.SystemRequiredKontakt>(
    'Adresar/SystemRequiredKontakt'
  );
  export interface SystemRequiredKontakt {}
}

export module Centrix1Migracija {
  export const InternaDostavnaKnjigaPismenaInfo = createStructureInfo<
    Centrix1Migracija.InternaDostavnaKnjigaPismena
  >('Centrix1Migracija/InternaDostavnaKnjigaPismena');
  export interface InternaDostavnaKnjigaPismena {
    ID: string;
    DatumKreiranja?: Date;
    Status?: string;
    Primjedba?: string;
    PismenoID?: string;
    KreiraoID?: string;
  }

  export const InternaDostavnaKnjigaPismenaBrowseInfo = createStructureInfo<
    Centrix1Migracija.InternaDostavnaKnjigaPismenaBrowse
  >('Centrix1Migracija/InternaDostavnaKnjigaPismenaBrowse');
  export interface InternaDostavnaKnjigaPismenaBrowse {
    ID: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    Status?: string;
    Primjedba?: string;
    KreiraoNaziv?: string;
  }

  export const PredmetRazvodjenjeInfo = createStructureInfo<Centrix1Migracija.PredmetRazvodjenje>(
    'Centrix1Migracija/PredmetRazvodjenje'
  );
  export interface PredmetRazvodjenje {
    ID: string;
    DatumRazvodjenja?: Date;
    OznakaRazvodjenja?: string;
    Primjedba?: string;
    PredmetID?: string;
    KreiraoID?: string;
  }

  export const PredmetRazvodjenjeBrowseInfo = createStructureInfo<
    Centrix1Migracija.PredmetRazvodjenjeBrowse
  >('Centrix1Migracija/PredmetRazvodjenjeBrowse');
  export interface PredmetRazvodjenjeBrowse {
    ID: string;
    PredmetID?: string;
    DatumRazvodjenja?: Date;
    OznakaRazvodjenja?: string;
    Primjedba?: string;
    KreiraoNaziv?: string;
  }
}

export module EvidencijaPismena {
  export const DocumentTemplateInfo = createStructureInfo<EvidencijaPismena.DocumentTemplate>(
    'EvidencijaPismena/DocumentTemplate'
  );
  export interface DocumentTemplate {
    ID: string;
    Name: string;
    Comment?: string;
    DocumentTemplateUsageID?: string;
    Active?: boolean;
  }

  export const DocumentTemplateContentInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateContent
  >('EvidencijaPismena/DocumentTemplateContent');
  export interface DocumentTemplateContent {
    ID: string;
    DocumentTemplateID?: string;
    CreatedDate?: Date;
    FileExtension?: string;
    CreatedByID?: string;
  }

  export const DocumentTemplateBrowseInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateBrowse
  >('EvidencijaPismena/DocumentTemplateBrowse');
  export interface DocumentTemplateBrowse {
    ID: string;
    Name?: string;
    Active?: boolean;
    Comment?: string;
    DocumentTemplateUsageID?: string;
    DocumentVersionLastModifiedDate?: Date;
    TipoviPredmeta?: string;
    Kreirao?: string;
    LastDocumentTemplateContentID?: string;
  }

  export const DocumentTemplateExtInfo = createStructureInfo<EvidencijaPismena.DocumentTemplateExt>(
    'EvidencijaPismena/DocumentTemplateExt'
  );
  export interface DocumentTemplateExt {
    ID: string;
    TipoviPredmeta?: string;
    LastModified?: Date;
    LastDocumentTemplateContentID?: string;
    FileName?: string;
    LastCreatedByID?: string;
  }

  export const DocumentTemplateUsageInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateUsage
  >('EvidencijaPismena/DocumentTemplateUsage');
  export interface DocumentTemplateUsage {
    ID: string;
    Name: string;
  }

  export const DocumentTemplateLookupInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateLookup
  >('EvidencijaPismena/DocumentTemplateLookup');
  export interface DocumentTemplateLookup {
    ID: string;
    Name?: string;
    DocumentTemplateUsageID?: string;
  }

  export const DocumentTemplateUsageFilterInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateUsageFilter
  >('EvidencijaPismena/DocumentTemplateUsageFilter');
  export interface DocumentTemplateUsageFilter {
    DocumentTemplateUsageID?: string;
    DocumentID?: string;
  }

  export const WithDocumentVersionOnlyInfo = createStructureInfo<
    EvidencijaPismena.WithDocumentVersionOnly
  >('EvidencijaPismena/WithDocumentVersionOnly');
  export interface WithDocumentVersionOnly {}

  export const DocumentTemplateTipPredmetaInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateTipPredmeta
  >('EvidencijaPismena/DocumentTemplateTipPredmeta');
  export interface DocumentTemplateTipPredmeta {
    ID: string;
    DocumentTemplateID: string;
    TipPredmetaID: string;
  }

  export const DocumentTemplateTipPredmetaBrowseInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplateTipPredmetaBrowse
  >('EvidencijaPismena/DocumentTemplateTipPredmetaBrowse');
  export interface DocumentTemplateTipPredmetaBrowse {
    ID: string;
    DocumentTemplateID?: string;
    TipPredmetaNaziv?: string;
    TipPredmetaActive?: string;
  }

  export const MoguciTipoviPredmetaInfo = createStructureInfo<
    EvidencijaPismena.MoguciTipoviPredmeta
  >('EvidencijaPismena/MoguciTipoviPredmeta');
  export interface MoguciTipoviPredmeta {
    DocumentTemplateID?: string;
  }

  export const DocumentTemplatePismenoInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePismeno
  >('EvidencijaPismena/DocumentTemplatePismeno');
  export interface DocumentTemplatePismeno {
    DocumentTemplateID?: string;
    IsDmsTemplate?: boolean;
    DocumentID?: string;
  }

  export const DocumentTemplatePismenoBaseDsInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePismenoBaseDs
  >('EvidencijaPismena/DocumentTemplatePismenoBaseDs');
  export interface DocumentTemplatePismenoBaseDs {
    ID: string;
    PredmetKlasa?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetReferent?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoPravnaOsobaID?: string;
    PismenoFizickaOsobaID?: string;
    PismenoOsnovniSubjektID?: string;
    PismenoOsnovniSubjektDostavnaPostaID?: string;
    PismenoOsnovniSubjektNaseljeID?: string;
    PismenoOsnovniSubjektDrzavaID?: string;
    PismenoOsnovniSubjektMjestoID?: string;
    PismenoOsnovniSubjektAdresaID?: string;
    PredmetID?: string;
    NadleznostID?: string;
    PredmetUstrojstvenaJedinicaID?: string;
    PredmetLokacijaID?: string;
  }

  export const DocumentTemplatePrilogInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePrilog
  >('EvidencijaPismena/DocumentTemplatePrilog');
  export interface DocumentTemplatePrilog {
    DocumentTemplateID?: string;
    IsDmsTemplate?: boolean;
    DocumentID?: string;
  }

  export const DocumentTemplatePrilogBaseDsInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePrilogBaseDs
  >('EvidencijaPismena/DocumentTemplatePrilogBaseDs');
  export interface DocumentTemplatePrilogBaseDs {
    ID: string;
    PredmetKlasa?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetReferent?: string;
    PrilogDatumNastanka?: string;
    PrilogDatumNastankaTekst?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoPravnaOsobaID?: string;
    PismenoFizickaOsobaID?: string;
    PismenoOsnovniSubjektID?: string;
    PismenoOsnovniSubjektDostavnaPostaID?: string;
    PismenoOsnovniSubjektNaseljeID?: string;
    PismenoOsnovniSubjektDrzavaID?: string;
    PismenoOsnovniSubjektMjestoID?: string;
    PismenoOsnovniSubjektAdresaID?: string;
    PismenoID?: string;
    PredmetID?: string;
    NadleznostID?: string;
    PrilogVrstaPrilogaID?: string;
    PredmetUstrojstvenaJedinicaID?: string;
    PredmetLokacijaID?: string;
  }

  export const FiksniDioKlaseUpravnostDosjeInfo = createStructureInfo<
    EvidencijaPismena.FiksniDioKlaseUpravnostDosje
  >('EvidencijaPismena/FiksniDioKlaseUpravnostDosje');
  export interface FiksniDioKlaseUpravnostDosje {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const DosjeVrstaUpravnogPostupkaInfo = createStructureInfo<
    EvidencijaPismena.DosjeVrstaUpravnogPostupka
  >('EvidencijaPismena/DosjeVrstaUpravnogPostupka');
  export interface DosjeVrstaUpravnogPostupka {
    ID: string;
    DosjeID: string;
    VrijediOd: Date;
    Naziv?: string;
    VrstaUpravnogPostupkaID: string;
  }

  export const UpravnostDosjeFiksniDioKlaseInfo = createStructureInfo<
    EvidencijaPismena.UpravnostDosjeFiksniDioKlase
  >('EvidencijaPismena/UpravnostDosjeFiksniDioKlase');
  export interface UpravnostDosjeFiksniDioKlase {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const UpravnostDosjeLookupInfo = createStructureInfo<
    EvidencijaPismena.UpravnostDosjeLookup
  >('EvidencijaPismena/UpravnostDosjeLookup');
  export interface UpravnostDosjeLookup {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const TipDokumentaDropdownInfo = createStructureInfo<
    EvidencijaPismena.TipDokumentaDropdown
  >('EvidencijaPismena/TipDokumentaDropdown');
  export interface TipDokumentaDropdown {
    ID: string;
    Naziv: string;
    Filter: string;
    Sifra?: number;
  }

  export const TipVremenskogFilteraDropdownInfo = createStructureInfo<
    EvidencijaPismena.TipVremenskogFilteraDropdown
  >('EvidencijaPismena/TipVremenskogFilteraDropdown');
  export interface TipVremenskogFilteraDropdown {
    ID: string;
    Naziv: string;
    Filter: string;
    Sifra?: number;
  }

  export const PrijemniStambiljInfo = createStructureInfo<EvidencijaPismena.PrijemniStambilj>(
    'EvidencijaPismena/PrijemniStambilj'
  );
  export interface PrijemniStambilj {
    IspisID?: string;
  }

  export const PrijemniStambilj_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.PrijemniStambilj_DataSource
  >('EvidencijaPismena/PrijemniStambilj_DataSource');
  export interface PrijemniStambilj_DataSource {
    ID: string;
    Primljeno?: string;
    KlasifikacijskaOznaka?: string;
    OUUJ?: string;
    UrudzbeniBroj?: string;
    Prilozi?: string;
    Vrijednost?: string;
    Barkod?: string;
  }

  export const OmotSpisaNeupravnogPredmetaInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaNeupravnogPredmeta
  >('EvidencijaPismena/OmotSpisaNeupravnogPredmeta');
  export interface OmotSpisaNeupravnogPredmeta {
    IspisID?: string;
  }

  export const OmotSpisaNeupravnogPredmeta_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaNeupravnogPredmeta_DataSource
  >('EvidencijaPismena/OmotSpisaNeupravnogPredmeta_DataSource');
  export interface OmotSpisaNeupravnogPredmeta_DataSource {
    ID: string;
    NazivTijela?: string;
    OUUJ?: string;
    KlasifikacijskaOznaka?: string;
    Predmet?: string;
  }

  export const PopisAkataIspisInfo = createStructureInfo<EvidencijaPismena.PopisAkataIspis>(
    'EvidencijaPismena/PopisAkataIspis'
  );
  export interface PopisAkataIspis {
    IspisID?: string;
  }

  export const PopisAkata_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.PopisAkata_DataSource
  >('EvidencijaPismena/PopisAkata_DataSource');
  export interface PopisAkata_DataSource {
    ID: string;
    PredmetID?: string;
    OdabranaKlasa?: string;
    UrudzbeniBroj?: string;
    DatumPrimitka?: string;
    NazivAkta?: string;
    NazivPriloga?: string;
    BrojPriloga?: string;
    Primjedba?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupkaInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaPredmetaUpravnogPostupka
  >('EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka');
  export interface OmotSpisaPredmetaUpravnogPostupka {
    IspisID?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_Glava_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaPredmetaUpravnogPostupka_Glava_DataSource
  >('EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_Glava_DataSource');
  export interface OmotSpisaPredmetaUpravnogPostupka_Glava_DataSource {
    ID: string;
    PredmetID?: string;
    OznakaUpravnogPredmeta?: string;
    NazivTijela?: string;
    OUUJ?: string;
    RokZaRjesavanje?: string;
    KlasifikacijskaOznaka?: string;
    Predmet?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSource
  >('EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSource');
  export interface OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSource {
    ID: string;
    PredmetID?: string;
    Zahtjev_Odbacen?: string;
    Zahtjev_Odbijen?: string;
    Zahtjev_Usvojen?: string;
    Zalba1_Odbacena?: string;
    Zalba1_RjesenjeZamjenjenoNovim?: string;
    Zalba1_ZalbaDostavljenaDrugostupanjkomTijelu?: string;
    ZalbaPrvostupanjskomDana?: string;
    ZahtjevDana?: string;
    RokZaRjesavanje?: string;
    PostupakObustavljen?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSourceInfo = createStructureInfo<
    EvidencijaPismena.OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSource
  >('EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSource');
  export interface OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSource {
    ID: string;
    PredmetID?: string;
    Zalba2_Odbacena?: string;
    Zalba2_Odbijena?: string;
    Zalba2_RjesenjeJeIzmjenjeno?: string;
    Zalba2_RjesenjeJePonisteno?: string;
    Zalba2_RjesenjeJeProglasenoNistavnim?: string;
    Razlog1?: string;
    Razlog2?: string;
    Razlog3?: string;
    ZalbaDrugostupanjskomTijelu?: string;
    PostupakObustavljen?: string;
  }

  export const PismenaPromijeniTipInfo = createStructureInfo<EvidencijaPismena.PismenaPromijeniTip>(
    'EvidencijaPismena/PismenaPromijeniTip'
  );
  export interface PismenaPromijeniTip {
    ID: string;
    DatumKreiranja?: Date;
    PismenoID: string;
    TipPismenaID?: string;
    KorisnikID?: string;
  }

  export const ValidForPromijeniTipPismenaInfo = createStructureInfo<
    EvidencijaPismena.ValidForPromijeniTipPismena
  >('EvidencijaPismena/ValidForPromijeniTipPismena');
  export interface ValidForPromijeniTipPismena {}

  export const PismenaPromijeniTipBrowseInfo = createStructureInfo<
    EvidencijaPismena.PismenaPromijeniTipBrowse
  >('EvidencijaPismena/PismenaPromijeniTipBrowse');
  export interface PismenaPromijeniTipBrowse {
    ID: string;
    PismenoID?: string;
    TipPismenaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const PismenoInfo = createStructureInfo<EvidencijaPismena.Pismeno>(
    'EvidencijaPismena/Pismeno'
  );
  export interface Pismeno {
    ID: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    PosiljateljIliPodnositeljID?: string;
    Naziv: string;
    DatumNastankaAktaIliPrimitkaPismena: Date;
    JePodnesak: boolean;
    BrojPriloga: number;
    Vrijednost?: string;
    SluzbenaBiljeska?: string;
    OmotnicaPrilozena: boolean;
    PismenoNaKojeJePrilozenaOmotnicaID?: string;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    DatumNastankaPismena?: Date;
    RedniBroj?: number;
    UrudzbeniBroj?: string;
    PredmetID: string;
    GlavniPredmetID?: string;
    KreiraoID?: string;
    UstrojstvenaJedinicaID?: string;
    StvarateljID?: string;
    UNadleznostiID?: string;
  }

  export const DocumentTemplatePismenoDsInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePismenoDs
  >('EvidencijaPismena/DocumentTemplatePismenoDs');
  export interface DocumentTemplatePismenoDs {
    ID: string;
    PredmetKlasa?: string;
    PredmetNaziv?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetBarkod?: string;
    PredmetUstrojstvenaJedinicaNaziv?: string;
    PredmetReferent?: string;
    PredmetLokacijaNaziv?: string;
    PredmetLokacijaAdresa?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoBrojPriloga?: number;
    StrankaNaziv?: string;
    StrankaUlicaIKucniBroj?: string;
    StrankaPostanskiBroj?: string;
    StrankaMjestoNaziv?: string;
    StrankaDrzavaSluzbeniNaziv?: string;
    StrankaOib?: string;
    StrankaMbg?: string;
    StrankaMbs?: string;
    StrankaMb?: string;
    MigriraniBarkodPismeno?: string;
    PredmetSignatura?: string;
    PredmetZaduzenje?: string;
  }

  export const PismenoAdditionalDataInfo = createStructureInfo<
    EvidencijaPismena.PismenoAdditionalData
  >('EvidencijaPismena/PismenoAdditionalData');
  export interface PismenoAdditionalData {
    ID: string;
    TipPismenaID?: string;
    StupanjTajnostiID?: string;
  }

  export const DatumNastankaAktaIliPrimitkaPismenaDUBuducnostiInfo = createStructureInfo<
    EvidencijaPismena.DatumNastankaAktaIliPrimitkaPismenaDUBuducnosti
  >('EvidencijaPismena/DatumNastankaAktaIliPrimitkaPismenaDUBuducnosti');
  export interface DatumNastankaAktaIliPrimitkaPismenaDUBuducnosti {}

  export const DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanjaInfo = createStructureInfo<
    EvidencijaPismena.DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanja
  >('EvidencijaPismena/DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanja');
  export interface DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanja {}

  export const VratiURadPoslijeUrudzbiranjaInfo = createStructureInfo<
    EvidencijaPismena.VratiURadPoslijeUrudzbiranja
  >('EvidencijaPismena/VratiURadPoslijeUrudzbiranja');
  export interface VratiURadPoslijeUrudzbiranja {
    Pismeno: string;
  }

  export const UpsertPismenoInfo = createStructureInfo<EvidencijaPismena.UpsertPismeno>(
    'EvidencijaPismena/UpsertPismeno'
  );
  export interface UpsertPismeno {
    Pismeno: string;
    PismenoPrilozi?: string;
    PismenoDodatneOznake?: string;
    PismenoDodatneStranke?: string;
    PismenoSluzbeneBiljeske?: string;
    TipPismenaID?: string;
    ForceInsert?: boolean;
    ForceUpdate?: boolean;
    StupanjTajnostiID?: string;
    KreiranoIzPismenaID?: string;
  }

  export const PismenoSmartSearchAutoCompleteInfo = createStructureInfo<
    EvidencijaPismena.PismenoSmartSearchAutoComplete
  >('EvidencijaPismena/PismenoSmartSearchAutoComplete');
  export interface PismenoSmartSearchAutoComplete {
    ID: string;
    Barkod?: string;
  }

  export const PismenoBarkodInfo = createStructureInfo<EvidencijaPismena.PismenoBarkod>(
    'EvidencijaPismena/PismenoBarkod'
  );
  export interface PismenoBarkod {
    ID: string;
    Barkod?: string;
    PredmetBarkod?: string;
  }

  export const PismenoBrowseInfo = createStructureInfo<EvidencijaPismena.PismenoBrowse>(
    'EvidencijaPismena/PismenoBrowse'
  );
  export interface PismenoBrowse {
    ID: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    JePodnesak?: boolean;
    Barkod?: string;
    RedniBroj?: number;
    DatumKreiranja?: Date;
    PredmetID?: string;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    PosiljateljIliStvaratelj?: string;
    PrilogCount?: number;
    UNadleznosti?: string;
    DodatneOznake?: string;
    StatusPredmetaNaziv?: string;
    StatusPismenaNaziv?: string;
    DatumStatusa?: Date;
    TipPismenaNaziv?: string;
    TipPredmetaNaziv?: string;
    Active?: boolean;
    Razvodjenje?: string;
    StupanjTajnosti?: string;
  }

  export const PismenoBrowseThisIDsOnlyInfo = createStructureInfo<
    EvidencijaPismena.PismenoBrowseThisIDsOnly
  >('EvidencijaPismena/PismenoBrowseThisIDsOnly');
  export interface PismenoBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PismenoBrowseIPovezaniInfo = createStructureInfo<
    EvidencijaPismena.PismenoBrowseIPovezani
  >('EvidencijaPismena/PismenoBrowseIPovezani');
  export interface PismenoBrowseIPovezani {
    PredmetID?: string;
  }

  export const PismenoExtendedInfo = createStructureInfo<EvidencijaPismena.PismenoExtended>(
    'EvidencijaPismena/PismenoExtended'
  );
  export interface PismenoExtended {
    ID: string;
    PosiljateljIliStvaratelj?: string;
    DodatneOznake?: string;
    PrilogCount?: number;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    Active?: boolean;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    JePodnesak?: boolean;
    Barkod?: string;
    PredmetPovezivanje?: string;
    PredmetBrisan?: boolean;
    UNadleznostiID?: string;
    GlavniPredmetID?: string;
    StatusPredmetaNaziv?: string;
    StatusPismenaNaziv?: string;
    DatumStatusa?: Date;
    TipPismenaNaziv?: string;
    TipPredmetaNaziv?: string;
    PredmetID?: string;
    StatusPismenaID?: string;
    StatusPredmetaID?: string;
  }

  export const PismenoLookupInfo = createStructureInfo<EvidencijaPismena.PismenoLookup>(
    'EvidencijaPismena/PismenoLookup'
  );
  export interface PismenoLookup {
    ID: string;
    PredmetID?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    Barkod?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    PredmetKlasifikacijskaOznaka?: string;
    Active?: boolean;
  }

  export const SearchWithActiveInfo = createStructureInfo<EvidencijaPismena.SearchWithActive>(
    'EvidencijaPismena/SearchWithActive'
  );
  export interface SearchWithActive {
    Pattern?: string;
  }

  export const SearchInfo = createStructureInfo<EvidencijaPismena.Search>(
    'EvidencijaPismena/Search'
  );
  export interface Search {
    Pattern?: string;
  }

  export const DodatnaOznakaInfo = createStructureInfo<EvidencijaPismena.DodatnaOznaka>(
    'EvidencijaPismena/DodatnaOznaka'
  );
  export interface DodatnaOznaka {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const DodatnaOznakaBrowseInfo = createStructureInfo<EvidencijaPismena.DodatnaOznakaBrowse>(
    'EvidencijaPismena/DodatnaOznakaBrowse'
  );
  export interface DodatnaOznakaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const PismenoDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.PismenoDodatnaOznaka
  >('EvidencijaPismena/PismenoDodatnaOznaka');
  export interface PismenoDodatnaOznaka {
    ID: string;
    OznakaID: string;
    PismenoID: string;
  }

  export const UpdatePismenoDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.UpdatePismenoDodatnaOznaka
  >('EvidencijaPismena/UpdatePismenoDodatnaOznaka');
  export interface UpdatePismenoDodatnaOznaka {
    PismenoID?: string;
    DodatneOznake?: string;
  }

  export const ReferenceNonExistentStvarateljInfo = createStructureInfo<
    EvidencijaPismena.ReferenceNonExistentStvaratelj
  >('EvidencijaPismena/ReferenceNonExistentStvaratelj');
  export interface ReferenceNonExistentStvaratelj {}

  export const UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookupInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookup
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookup');
  export interface UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookup {
    HistoryLookupStvaratelj?: string;
  }

  export const PismenoKorisnickePostavkeInfo = createStructureInfo<
    EvidencijaPismena.PismenoKorisnickePostavke
  >('EvidencijaPismena/PismenoKorisnickePostavke');
  export interface PismenoKorisnickePostavke {
    ID: string;
    PredefiniraniStvarateljAktaID: string;
  }

  export const GetForUserOrDefaultInfo = createStructureInfo<EvidencijaPismena.GetForUserOrDefault>(
    'EvidencijaPismena/GetForUserOrDefault'
  );
  export interface GetForUserOrDefault {
    ID?: string;
  }

  export const GetForCurrentUserOrDefaultInfo = createStructureInfo<
    EvidencijaPismena.GetForCurrentUserOrDefault
  >('EvidencijaPismena/GetForCurrentUserOrDefault');
  export interface GetForCurrentUserOrDefault {}

  export const PredefiniraniStvarateljAktaInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniStvarateljAkta
  >('EvidencijaPismena/PredefiniraniStvarateljAkta');
  export interface PredefiniraniStvarateljAkta {
    ID: string;
    Naziv?: string;
    Opis?: string;
  }

  export const PredefiniraniStvarateljAktaFormattedInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniStvarateljAktaFormatted
  >('EvidencijaPismena/PredefiniraniStvarateljAktaFormatted');
  export interface PredefiniraniStvarateljAktaFormatted {
    ID: string;
    NazivFormatted?: string;
  }

  export const GetForCurrentUserInfo = createStructureInfo<EvidencijaPismena.GetForCurrentUser>(
    'EvidencijaPismena/GetForCurrentUser'
  );
  export interface GetForCurrentUser {}

  export const StvarateljAktaFromPismenoKorisnickePostavkeInfo = createStructureInfo<
    EvidencijaPismena.StvarateljAktaFromPismenoKorisnickePostavke
  >('EvidencijaPismena/StvarateljAktaFromPismenoKorisnickePostavke');
  export interface StvarateljAktaFromPismenoKorisnickePostavke {
    ID: string;
    StvarateljID?: string;
  }

  export const GetForPredmetInfo = createStructureInfo<EvidencijaPismena.GetForPredmet>(
    'EvidencijaPismena/GetForPredmet'
  );
  export interface GetForPredmet {
    PredmetID?: string;
    UNadleznostiID?: string;
    PredefiniraniStvarateljID?: string;
  }

  export const PismenoEventDataInfo = createStructureInfo<EvidencijaPismena.PismenoEventData>(
    'EvidencijaPismena/PismenoEventData'
  );
  export interface PismenoEventData {
    ID: string;
    TipPismenaID?: string;
  }

  export const PismenoEventDataPersistedInfo = createStructureInfo<
    EvidencijaPismena.PismenoEventDataPersisted
  >('EvidencijaPismena/PismenoEventDataPersisted');
  export interface PismenoEventDataPersisted {
    ID: string;
    TipPismenaID?: string;
  }

  export const PismenoPredmetLookupInfo = createStructureInfo<
    EvidencijaPismena.PismenoPredmetLookup
  >('EvidencijaPismena/PismenoPredmetLookup');
  export interface PismenoPredmetLookup {
    ID: string;
    PredmetID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    PredmetBarkod?: string;
    PredmetNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PismenoStvarateljInfo = createStructureInfo<EvidencijaPismena.PismenoStvaratelj>(
    'EvidencijaPismena/PismenoStvaratelj'
  );
  export interface PismenoStvaratelj {
    ID: string;
    StvarateljID?: string;
  }

  export const PismenoStvarateljLookupInfo = createStructureInfo<
    EvidencijaPismena.PismenoStvarateljLookup
  >('EvidencijaPismena/PismenoStvarateljLookup');
  export interface PismenoStvarateljLookup {
    ID: string;
    IsZaposlenik?: boolean;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    BrojcanaOznaka?: string;
  }

  export const PismenoBrisanjeInfo = createStructureInfo<EvidencijaPismena.PismenoBrisanje>(
    'EvidencijaPismena/PismenoBrisanje'
  );
  export interface PismenoBrisanje {
    ID: string;
    PismenoID: string;
    DatumKreiranja?: Date;
    JePonistavanjeBrisanja: boolean;
    ActiveReason?: string;
    KreiraoID: string;
  }

  export const PismenoValidForPismenoDeleteInfo = createStructureInfo<
    EvidencijaPismena.PismenoValidForPismenoDelete
  >('EvidencijaPismena/PismenoValidForPismenoDelete');
  export interface PismenoValidForPismenoDelete {}

  export const ValidForPismenoUndoDeleteInfo = createStructureInfo<
    EvidencijaPismena.ValidForPismenoUndoDelete
  >('EvidencijaPismena/ValidForPismenoUndoDelete');
  export interface ValidForPismenoUndoDelete {}

  export const BrisanjeAktiviranjePismenaInfo = createStructureInfo<
    EvidencijaPismena.BrisanjeAktiviranjePismena
  >('EvidencijaPismena/BrisanjeAktiviranjePismena');
  export interface BrisanjeAktiviranjePismena {
    PismenoID?: string;
    IsActive?: boolean;
    ActiveReason?: string;
  }

  export const ComputePismenoFTSKljucneRijeciInfo = createStructureInfo<
    EvidencijaPismena.ComputePismenoFTSKljucneRijeci
  >('EvidencijaPismena/ComputePismenoFTSKljucneRijeci');
  export interface ComputePismenoFTSKljucneRijeci {
    ID: string;
    PredmetID?: string;
    KljucneRijeci?: string;
    PismenoNaziv?: string;
  }

  export const PismenoDodatnaStrankaInfo = createStructureInfo<
    EvidencijaPismena.PismenoDodatnaStranka
  >('EvidencijaPismena/PismenoDodatnaStranka');
  export interface PismenoDodatnaStranka {
    ID: string;
    StrankaID?: string;
    PismenoID?: string;
  }

  export const UpdatePismenoDodatnaStrankaInfo = createStructureInfo<
    EvidencijaPismena.UpdatePismenoDodatnaStranka
  >('EvidencijaPismena/UpdatePismenoDodatnaStranka');
  export interface UpdatePismenoDodatnaStranka {
    PismenoID?: string;
    DodatneStranke?: string;
  }

  export const PismenoExtensionsDefinitionInfo = createStructureInfo<
    EvidencijaPismena.PismenoExtensionsDefinition
  >('EvidencijaPismena/PismenoExtensionsDefinition');
  export interface PismenoExtensionsDefinition {
    ID: string;
    Field?: string;
    FieldValue?: string;
    ControllerName: string;
    ViewModelType: string;
  }

  export const PismenoFtsComputedInfo = createStructureInfo<EvidencijaPismena.PismenoFtsComputed>(
    'EvidencijaPismena/PismenoFtsComputed'
  );
  export interface PismenoFtsComputed {
    ID: string;
    FtsContent?: string;
    PredmetID?: string;
  }

  export const PismenoFtsInfo = createStructureInfo<EvidencijaPismena.PismenoFts>(
    'EvidencijaPismena/PismenoFts'
  );
  export interface PismenoFts {
    ID: string;
    PredmetID?: string;
    FtsContent?: string;
  }

  export const VrstaGeneriranjaUrudzbenogBrojaAktaInfo = createStructureInfo<
    EvidencijaPismena.VrstaGeneriranjaUrudzbenogBrojaAkta
  >('EvidencijaPismena/VrstaGeneriranjaUrudzbenogBrojaAkta');
  export interface VrstaGeneriranjaUrudzbenogBrojaAkta {
    ID: string;
    Sifra: number;
    Opis: string;
    JeVrsta1?: boolean;
    JeVrsta2?: boolean;
    JeVrsta3?: boolean;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAktaInfo = createStructureInfo<
    EvidencijaPismena.OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta
  >('EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta');
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta {
    ID: string;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
    RazinaPovlacenjaBrojcaneOznake?: number;
    PonovnoKoristenjeObrisanih: boolean;
    DodavnjeNulaDoBrojaZnamenki: number;
    ActiveSince?: Date;
  }

  export const ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaInfo = createStructureInfo<
    EvidencijaPismena.ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAkta
  >('EvidencijaPismena/ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAkta');
  export interface ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAkta {
    ID: string;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
    ZaposlenikID: string;
    Active?: boolean;
  }

  export const ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowseInfo = createStructureInfo<
    EvidencijaPismena.ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowse
  >('EvidencijaPismena/ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowse');
  export interface ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowse {
    ID: string;
    Active?: boolean;
    BrOznakaNazivUJNaziv?: string;
    Sifra?: number;
    Opis?: string;
  }

  export const PodatakZaGeneriranjeUrudzbenogBrojaInfo = createStructureInfo<
    EvidencijaPismena.PodatakZaGeneriranjeUrudzbenogBroja
  >('EvidencijaPismena/PodatakZaGeneriranjeUrudzbenogBroja');
  export interface PodatakZaGeneriranjeUrudzbenogBroja {
    ID?: string;
    PismenoID?: string;
    PredmetID?: string;
    StvarateljID?: string;
    JePodnesak?: boolean;
    BrojcanaOznakaStvaratelja?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    GodinaNastankaAktaIliPrimitkaPodneska?: number;
    GodinaNastankaAktaIliPrimitkaPodneskaKratka?: string;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const PismenoRedniBrojResultInfo = createStructureInfo<
    EvidencijaPismena.PismenoRedniBrojResult
  >('EvidencijaPismena/PismenoRedniBrojResult');
  export interface PismenoRedniBrojResult {
    RedniBroj?: number;
    BrojcanaOznakaStvaratelja?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    IsZaposlenik?: boolean;
    VrstaGeneriranja?: number;
    RazinaPovlacenja?: number;
    DodavnjeNulaDoBrojaZnamenki?: number;
  }

  export const PismenoPismenoBrowseInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoBrowse
  >('EvidencijaPismena/PismenoPismenoBrowse');
  export interface PismenoPismenoBrowse {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    KlasifikacijskaOznakaGlavnog?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBrojGlavnog?: string;
    UrudzbeniBroj?: string;
  }

  export const PismenoPismenoComputedInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoComputed
  >('EvidencijaPismena/PismenoPismenoComputed');
  export interface PismenoPismenoComputed {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    KlasifikacijskaOznakaGlavnog?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBrojGlavnog?: string;
    UrudzbeniBroj?: string;
  }

  export const GetByGlavnoPismenoVezanoPismenoIDsInfo = createStructureInfo<
    EvidencijaPismena.GetByGlavnoPismenoVezanoPismenoIDs
  >('EvidencijaPismena/GetByGlavnoPismenoVezanoPismenoIDs');
  export interface GetByGlavnoPismenoVezanoPismenoIDs {
    GlavnoPismenoVezanoPismenoListJson?: string;
  }

  export const PismenoPismenoPovezivanjeEventInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoPovezivanjeEvent
  >('EvidencijaPismena/PismenoPismenoPovezivanjeEvent');
  export interface PismenoPismenoPovezivanjeEvent {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ValidForPovezivanjeInfo = createStructureInfo<EvidencijaPismena.ValidForPovezivanje>(
    'EvidencijaPismena/ValidForPovezivanje'
  );
  export interface ValidForPovezivanje {}

  export const PismenoPismenoPonistavanjeVezivanjaEventInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoPonistavanjeVezivanjaEvent
  >('EvidencijaPismena/PismenoPismenoPonistavanjeVezivanjaEvent');
  export interface PismenoPismenoPonistavanjeVezivanjaEvent {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ValidForPonistavanjePovezivanjaInfo = createStructureInfo<
    EvidencijaPismena.ValidForPonistavanjePovezivanja
  >('EvidencijaPismena/ValidForPonistavanjePovezivanja');
  export interface ValidForPonistavanjePovezivanja {}

  export const ComputePismenoPismenoPovezaniInfo = createStructureInfo<
    EvidencijaPismena.ComputePismenoPismenoPovezani
  >('EvidencijaPismena/ComputePismenoPismenoPovezani');
  export interface ComputePismenoPismenoPovezani {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PismenoPismenoPovezaniPersistedInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoPovezaniPersisted
  >('EvidencijaPismena/PismenoPismenoPovezaniPersisted');
  export interface PismenoPismenoPovezaniPersisted {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
  }

  export const PismenoPismenoPovezivanjeLogInfo = createStructureInfo<
    EvidencijaPismena.PismenoPismenoPovezivanjeLog
  >('EvidencijaPismena/PismenoPismenoPovezivanjeLog');
  export interface PismenoPismenoPovezivanjeLog {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PismenoVezanoNaPismenoBrowseInfo = createStructureInfo<
    EvidencijaPismena.PismenoVezanoNaPismenoBrowse
  >('EvidencijaPismena/PismenoVezanoNaPismenoBrowse');
  export interface PismenoVezanoNaPismenoBrowse {
    ID: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    PosiljateljIliStvaratelj?: string;
  }

  export const PismenoVezanoNaPismenoBrowseFTSSearchInfo = createStructureInfo<
    EvidencijaPismena.PismenoVezanoNaPismenoBrowseFTSSearch
  >('EvidencijaPismena/PismenoVezanoNaPismenoBrowseFTSSearch');
  export interface PismenoVezanoNaPismenoBrowseFTSSearch {
    Pattern?: string;
  }

  export const PredmetInfo = createStructureInfo<EvidencijaPismena.Predmet>(
    'EvidencijaPismena/Predmet'
  );
  export interface Predmet {
    ID: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    DosjeID: string;
    DatumOsnivanja: Date;
    RedniBroj?: number;
    PosebnaOznakaPredmeta?: string;
    KlasifikacijskaOznaka?: string;
    Naziv: string;
    StrankaID: string;
    RokZaRjesavanje?: Date;
    Napomena?: string;
    GlavniPredmetID?: string;
    VrstaUpravnogPostupkaID: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    UNadleznostiID: string;
    ActiveSince?: Date;
  }

  export const PredmetPredmetLookupInfo = createStructureInfo<
    EvidencijaPismena.PredmetPredmetLookup
  >('EvidencijaPismena/PredmetPredmetLookup');
  export interface PredmetPredmetLookup {
    ID: string;
    PredmetID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    GlavniPredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
  }

  export const AllowReadWritePismenoZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWritePismenoZaposlenik
  >('EvidencijaPismena/AllowReadWritePismenoZaposlenik');
  export interface AllowReadWritePismenoZaposlenik {
    PismenoID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PodsjetnikID?: string;
    ObradaPismenaPravoNaPismenoPrekoObradeOvlastenjaID?: string;
    UstrojstvoPravoRadaZaposlenikaPoDijeljenimPismenimaID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaAllowReadWritePismenoZaposlenikID?: string;
  }

  export const AllowReadWritePismenoZaposlenik_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWritePismenoZaposlenik_Materialized
  >('EvidencijaPismena/AllowReadWritePismenoZaposlenik_Materialized');
  export interface AllowReadWritePismenoZaposlenik_Materialized {
    ID: string;
    PismenoID: string;
    ZaposlenikID: string;
  }

  export const AllowReadPismenoZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.AllowReadPismenoZaposlenik
  >('EvidencijaPismena/AllowReadPismenoZaposlenik');
  export interface AllowReadPismenoZaposlenik {
    PismenoID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    AllowReadWritePismenoZaposlenik_MaterializedID?: string;
    UstrojstvoPravoRadaZaposlenikaPoDijeljenimPismenimaID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaAllowReadPismenoZaposlenikID?: string;
  }

  export const AllowReadPismenoZaposlenik_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadPismenoZaposlenik_Materialized
  >('EvidencijaPismena/AllowReadPismenoZaposlenik_Materialized');
  export interface AllowReadPismenoZaposlenik_Materialized {
    ID: string;
    PismenoID: string;
    ZaposlenikID: string;
  }

  export const PismenoPredmetPovezivanjeEventInfo = createStructureInfo<
    EvidencijaPismena.PismenoPredmetPovezivanjeEvent
  >('EvidencijaPismena/PismenoPredmetPovezivanjeEvent');
  export interface PismenoPredmetPovezivanjeEvent {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PismenoPredmetPonistavanjeVezivanjaEventInfo = createStructureInfo<
    EvidencijaPismena.PismenoPredmetPonistavanjeVezivanjaEvent
  >('EvidencijaPismena/PismenoPredmetPonistavanjeVezivanjaEvent');
  export interface PismenoPredmetPonistavanjeVezivanjaEvent {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePismenoPredmetPovezaniInfo = createStructureInfo<
    EvidencijaPismena.ComputePismenoPredmetPovezani
  >('EvidencijaPismena/ComputePismenoPredmetPovezani');
  export interface ComputePismenoPredmetPovezani {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PismenoPredmetPovezaniPersistedInfo = createStructureInfo<
    EvidencijaPismena.PismenoPredmetPovezaniPersisted
  >('EvidencijaPismena/PismenoPredmetPovezaniPersisted');
  export interface PismenoPredmetPovezaniPersisted {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
  }

  export const PismenaPredmetaIPovezanaPismenaInfo = createStructureInfo<
    EvidencijaPismena.PismenaPredmetaIPovezanaPismena
  >('EvidencijaPismena/PismenaPredmetaIPovezanaPismena');
  export interface PismenaPredmetaIPovezanaPismena {
    ID: string;
    PismenoID?: string;
    PredmetID?: string;
  }

  export const PismenoPredmetPovezivanjeLogInfo = createStructureInfo<
    EvidencijaPismena.PismenoPredmetPovezivanjeLog
  >('EvidencijaPismena/PismenoPredmetPovezivanjeLog');
  export interface PismenoPredmetPovezivanjeLog {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PismenoVezanoNaPredmetBrowseInfo = createStructureInfo<
    EvidencijaPismena.PismenoVezanoNaPredmetBrowse
  >('EvidencijaPismena/PismenoVezanoNaPredmetBrowse');
  export interface PismenoVezanoNaPredmetBrowse {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PismenoVezanoNaPredmetBrowseFTSSearchInfo = createStructureInfo<
    EvidencijaPismena.PismenoVezanoNaPredmetBrowseFTSSearch
  >('EvidencijaPismena/PismenoVezanoNaPredmetBrowseFTSSearch');
  export interface PismenoVezanoNaPredmetBrowseFTSSearch {
    Pattern?: string;
  }

  export const PismenoPrilogInfo = createStructureInfo<EvidencijaPismena.PismenoPrilog>(
    'EvidencijaPismena/PismenoPrilog'
  );
  export interface PismenoPrilog {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    SubjektID?: string;
    Active?: boolean;
    Tip?: string;
    Barkod?: string;
  }

  export const PismenoPrilogLookupInfo = createStructureInfo<EvidencijaPismena.PismenoPrilogLookup>(
    'EvidencijaPismena/PismenoPrilogLookup'
  );
  export interface PismenoPrilogLookup {
    ID: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektID?: string;
    Barkod?: string;
    Active?: boolean;
  }

  export const PismenoPrilogLookupSearchInfo = createStructureInfo<
    EvidencijaPismena.PismenoPrilogLookupSearch
  >('EvidencijaPismena/PismenoPrilogLookupSearch');
  export interface PismenoPrilogLookupSearch {
    Pattern?: string;
  }

  export const PismenoSluzbenaBiljeskaInfo = createStructureInfo<
    EvidencijaPismena.PismenoSluzbenaBiljeska
  >('EvidencijaPismena/PismenoSluzbenaBiljeska');
  export interface PismenoSluzbenaBiljeska {
    ID: string;
    Biljeska: string;
  }

  export const SluzbenaBiljeskaPismenaInfo = createStructureInfo<
    EvidencijaPismena.SluzbenaBiljeskaPismena
  >('EvidencijaPismena/SluzbenaBiljeskaPismena');
  export interface SluzbenaBiljeskaPismena {
    ID: string;
    SluzbenaBiljeskaID: string;
    PismenoID: string;
    KreiraoID?: string;
    Active?: boolean;
  }

  export const UpdatePismenoSluzbenaBiljeskaInfo = createStructureInfo<
    EvidencijaPismena.UpdatePismenoSluzbenaBiljeska
  >('EvidencijaPismena/UpdatePismenoSluzbenaBiljeska');
  export interface UpdatePismenoSluzbenaBiljeska {
    PismenoID?: string;
    SluzbeneBiljeske?: string;
  }

  export const PlanKlasifikacijskihOznakaInfo = createStructureInfo<
    EvidencijaPismena.PlanKlasifikacijskihOznaka
  >('EvidencijaPismena/PlanKlasifikacijskihOznaka');
  export interface PlanKlasifikacijskihOznaka {
    ID: string;
    Naziv: string;
    VrijediOd: Date;
    RucniUnosRednogBroja?: boolean;
  }

  export const NoviPlanKlasifikacijskihOznakaInfo = createStructureInfo<
    EvidencijaPismena.NoviPlanKlasifikacijskihOznaka
  >('EvidencijaPismena/NoviPlanKlasifikacijskihOznaka');
  export interface NoviPlanKlasifikacijskihOznaka {}

  export const PlanKlasifikacijskihOznakaBrowseInfo = createStructureInfo<
    EvidencijaPismena.PlanKlasifikacijskihOznakaBrowse
  >('EvidencijaPismena/PlanKlasifikacijskihOznakaBrowse');
  export interface PlanKlasifikacijskihOznakaBrowse {
    ID: string;
    Naziv?: string;
    VrijediOd?: Date;
    RucniUnosRednogBroja?: boolean;
    VrijediDo?: Date;
    StatusID?: string;
    StatusNaziv?: string;
  }

  export const PlanKlasifikacijskihOznakaStatusInfo = createStructureInfo<
    EvidencijaPismena.PlanKlasifikacijskihOznakaStatus
  >('EvidencijaPismena/PlanKlasifikacijskihOznakaStatus');
  export interface PlanKlasifikacijskihOznakaStatus {
    ID: string;
    Naziv?: string;
  }

  export const PlanKlasifikacijskihOznakaKalkuliraniPodaciInfo = createStructureInfo<
    EvidencijaPismena.PlanKlasifikacijskihOznakaKalkuliraniPodaci
  >('EvidencijaPismena/PlanKlasifikacijskihOznakaKalkuliraniPodaci');
  export interface PlanKlasifikacijskihOznakaKalkuliraniPodaci {
    ID: string;
    PlanKlasifikacijskihOznakaStatusID?: string;
    VrijediDo?: Date;
  }

  export const UpsertPlanKlasifikacijskihOznakaInfo = createStructureInfo<
    EvidencijaPismena.UpsertPlanKlasifikacijskihOznaka
  >('EvidencijaPismena/UpsertPlanKlasifikacijskihOznaka');
  export interface UpsertPlanKlasifikacijskihOznaka {
    PlanKlasifikacijskihOznaka: string;
    KopirajIzID?: string;
  }

  export const DjelatnostInfo = createStructureInfo<EvidencijaPismena.Djelatnost>(
    'EvidencijaPismena/Djelatnost'
  );
  export interface Djelatnost {
    ID: string;
    PlanKlasifikacijskihOznakaID: string;
    Oznaka: string;
    Naziv: string;
    VrijediOd: Date;
  }

  export const DosjeInfo = createStructureInfo<EvidencijaPismena.Dosje>('EvidencijaPismena/Dosje');
  export interface Dosje {
    ID: string;
    DjelatnostID: string;
    Oznaka: string;
    Naziv: string;
    VrijediOd: Date;
  }

  export const DosjeVrstaUpravnogPostupkaBrowseInfo = createStructureInfo<
    EvidencijaPismena.DosjeVrstaUpravnogPostupkaBrowse
  >('EvidencijaPismena/DosjeVrstaUpravnogPostupkaBrowse');
  export interface DosjeVrstaUpravnogPostupkaBrowse {
    ID: string;
    Naziv?: string;
    DosjeID?: string;
    VrstaUpravnogPostupkaID?: string;
    VrijediOd?: Date;
    VrstaUpravnogPostupkaNaziv?: string;
  }

  export const DosjeQuickSearchInfo = createStructureInfo<EvidencijaPismena.DosjeQuickSearch>(
    'EvidencijaPismena/DosjeQuickSearch'
  );
  export interface DosjeQuickSearch {
    Pattern?: string;
    DatumOsnivanja?: Date;
    VrstaUpravnogPostupkaID?: string;
    DosjeID?: string;
  }

  export const DosjeExtendedInfo = createStructureInfo<EvidencijaPismena.DosjeExtended>(
    'EvidencijaPismena/DosjeExtended'
  );
  export interface DosjeExtended {
    ID: string;
    OblikKlasifikacijskeOznake?: string;
    Naziv?: string;
    Oznaka?: string;
    DjelatnostID?: string;
    VrijediDo?: Date;
    VrijediOd?: Date;
    VrstaUpravnogPostupkaID?: string;
  }

  export const DosjeLookupInfo = createStructureInfo<EvidencijaPismena.DosjeLookup>(
    'EvidencijaPismena/DosjeLookup'
  );
  export interface DosjeLookup {
    ID: string;
    Oznaka?: string;
    Naziv?: string;
    OblikKlasifikacijskeOznake?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    VrstaUpravnogPostupkaID?: string;
    DjelatnostOznaka?: string;
    DjelatnostNaziv?: string;
    RucniUnosRednogBroja?: boolean;
    FiksniDioKlase?: string;
  }

  export const PodsjetnikInfo = createStructureInfo<EvidencijaPismena.Podsjetnik>(
    'EvidencijaPismena/Podsjetnik'
  );
  export interface Podsjetnik {
    ID: string;
    ZaObjektID?: string;
    DatumIsteka: Date;
    Naziv: string;
    ZaKorisnikaID: string;
    KreiraoID?: string;
    Active?: boolean;
  }

  export const PodsjetnikPredmetPismenoInfo = createStructureInfo<
    EvidencijaPismena.PodsjetnikPredmetPismeno
  >('EvidencijaPismena/PodsjetnikPredmetPismeno');
  export interface PodsjetnikPredmetPismeno {
    ID: string;
    PismenoID?: string;
    PredmetID?: string;
  }

  export const PodsjetnikBrowseBaseInfo = createStructureInfo<
    EvidencijaPismena.PodsjetnikBrowseBase
  >('EvidencijaPismena/PodsjetnikBrowseBase');
  export interface PodsjetnikBrowseBase {
    ID: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Istekao?: boolean;
    Active?: boolean;
    PodsjetnikNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZaKorisnikaBrOznakaNazivUJNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ZaObjektID?: string;
    KreiraoID?: string;
    ZaKorisnikaID?: string;
  }

  export const PodsjetnikBrowseInfo = createStructureInfo<EvidencijaPismena.PodsjetnikBrowse>(
    'EvidencijaPismena/PodsjetnikBrowse'
  );
  export interface PodsjetnikBrowse {
    ID: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Istekao?: boolean;
    Active?: boolean;
    PodsjetnikNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZaKorisnikaBrOznakaNazivUJNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ZaObjektID?: string;
  }

  export const AktivniInfo = createStructureInfo<EvidencijaPismena.Aktivni>(
    'EvidencijaPismena/Aktivni'
  );
  export interface Aktivni {}

  export const AktivniCountInfo = createStructureInfo<EvidencijaPismena.AktivniCount>(
    'EvidencijaPismena/AktivniCount'
  );
  export interface AktivniCount {}

  export const IstekliPodsjetniciInfo = createStructureInfo<EvidencijaPismena.IstekliPodsjetnici>(
    'EvidencijaPismena/IstekliPodsjetnici'
  );
  export interface IstekliPodsjetnici {}

  export const IstekliPodsjetniciTrenutnogKorisnikaInfo = createStructureInfo<
    EvidencijaPismena.IstekliPodsjetniciTrenutnogKorisnika
  >('EvidencijaPismena/IstekliPodsjetniciTrenutnogKorisnika');
  export interface IstekliPodsjetniciTrenutnogKorisnika {}

  export const PrekoraceniPodsjetnikInfo = createStructureInfo<
    EvidencijaPismena.PrekoraceniPodsjetnik
  >('EvidencijaPismena/PrekoraceniPodsjetnik');
  export interface PrekoraceniPodsjetnik {
    ID: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Prekoraceno?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Active?: boolean;
    ZaObjektID?: string;
    PodsjetnikNaziv?: string;
    ZaKorisnikaID?: string;
  }

  export const PrekoraceniPodsjetnikBrowseInfo = createStructureInfo<
    EvidencijaPismena.PrekoraceniPodsjetnikBrowse
  >('EvidencijaPismena/PrekoraceniPodsjetnikBrowse');
  export interface PrekoraceniPodsjetnikBrowse {
    ID: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Prekoraceno?: string;
    PodsjetnikNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Active?: boolean;
    ZaObjektID?: string;
  }

  export const PredmetRucnoUneseniRedniBrojInfo = createStructureInfo<
    EvidencijaPismena.PredmetRucnoUneseniRedniBroj
  >('EvidencijaPismena/PredmetRucnoUneseniRedniBroj');
  export interface PredmetRucnoUneseniRedniBroj {
    ID: string;
    RedniBroj?: number;
    UstrojstvenaJedinicaID?: string;
  }

  export const UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlaseInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlase
  >('EvidencijaPismena/UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlase');
  export interface UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlase {}

  export const UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesenaInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesena
  >('EvidencijaPismena/UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesena');
  export interface UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesena {
    ID: string;
    KlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const UstrojstvenaJedinicaDatumProdukcijeInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaDatumProdukcije
  >('EvidencijaPismena/UstrojstvenaJedinicaDatumProdukcije');
  export interface UstrojstvenaJedinicaDatumProdukcije {
    ID: string;
    DatumProdukcije: Date;
  }

  export const PredmetAdditionalDataInfo = createStructureInfo<
    EvidencijaPismena.PredmetAdditionalData
  >('EvidencijaPismena/PredmetAdditionalData');
  export interface PredmetAdditionalData {
    ID: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetiUObradiInfo = createStructureInfo<EvidencijaPismena.PredmetiUObradi>(
    'EvidencijaPismena/PredmetiUObradi'
  );
  export interface PredmetiUObradi {}

  export const DatumNastankaPredmetaUBuducnostiInfo = createStructureInfo<
    EvidencijaPismena.DatumNastankaPredmetaUBuducnosti
  >('EvidencijaPismena/DatumNastankaPredmetaUBuducnosti');
  export interface DatumNastankaPredmetaUBuducnosti {}

  export const UpsertPredmetInfo = createStructureInfo<EvidencijaPismena.UpsertPredmet>(
    'EvidencijaPismena/UpsertPredmet'
  );
  export interface UpsertPredmet {
    Predmet: string;
    PredmetDodatneStranke?: string;
    PredmetDodatneOznake?: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const OsnivanjePredmetaInfo = createStructureInfo<EvidencijaPismena.OsnivanjePredmeta>(
    'EvidencijaPismena/OsnivanjePredmeta'
  );
  export interface OsnivanjePredmeta {
    Predmet: string;
    Pismeno: string;
    PismenoDodatneStranke?: string;
    PredmetDodatneStranke?: string;
    PismenoDodatneOznake?: string;
    PredmetDodatneOznake?: string;
    PismenoPrilozi?: string;
    PismenoSluzbeneBiljeske?: string;
    CustomOsnivanje?: boolean;
    RucnoUneseniRedniBrojPredmeta?: number;
    TipPredmetaID?: string;
    TipPismenaID?: string;
    PismenoStupanjTajnostiID?: string;
    PredmetStupanjTajnostiID?: string;
    KreiranoIzPismenaID?: string;
  }

  export const PredmetOsnivanjeInfo = createStructureInfo<EvidencijaPismena.PredmetOsnivanje>(
    'EvidencijaPismena/PredmetOsnivanje'
  );
  export interface PredmetOsnivanje {
    ID: string;
    PredmetID: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KreiraoID: string;
  }

  export const PredmetDodatnaStrankaInfo = createStructureInfo<
    EvidencijaPismena.PredmetDodatnaStranka
  >('EvidencijaPismena/PredmetDodatnaStranka');
  export interface PredmetDodatnaStranka {
    ID: string;
    StrankaID: string;
    PredmetID: string;
  }

  export const UpdatePredmetDodatnaStrankaInfo = createStructureInfo<
    EvidencijaPismena.UpdatePredmetDodatnaStranka
  >('EvidencijaPismena/UpdatePredmetDodatnaStranka');
  export interface UpdatePredmetDodatnaStranka {
    PredmetID?: string;
    DodatneStranke?: string;
  }

  export const PredmetExtendedInfo = createStructureInfo<EvidencijaPismena.PredmetExtended>(
    'EvidencijaPismena/PredmetExtended'
  );
  export interface PredmetExtended {
    ID: string;
    StrankaNazivMjestoNaziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    Povezivanje?: string;
    GlavniPredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    SadrziPismena?: boolean;
    SadrziPriloge?: boolean;
    Brisan?: boolean;
    DodatneStranke?: string;
    StatusPredmetaNaziv?: string;
    DatumStatusa?: Date;
    TipPredmetaNaziv?: string;
    Razvodjenje?: string;
    StatusPredmetaID?: string;
    TipPredmetaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetSmartSearchAutoCompleteInfo = createStructureInfo<
    EvidencijaPismena.PredmetSmartSearchAutoComplete
  >('EvidencijaPismena/PredmetSmartSearchAutoComplete');
  export interface PredmetSmartSearchAutoComplete {
    ID: string;
    Barkod?: string;
  }

  export const PredmetBrowseInfo = createStructureInfo<EvidencijaPismena.PredmetBrowse>(
    'EvidencijaPismena/PredmetBrowse'
  );
  export interface PredmetBrowse {
    ID: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    GlavniPredmetID?: string;
    DatumKreiranja?: Date;
    VrstaUpravnogPostupkaID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
    Active?: boolean;
    StatusPredmetaNaziv?: string;
    DatumStatusa?: Date;
    TipPredmetaNaziv?: string;
    Povezivanje?: string;
    Razvodjenje?: string;
    StupanjTajnosti?: string;
  }

  export const PredmetBrowseThisIDsOnlyInfo = createStructureInfo<
    EvidencijaPismena.PredmetBrowseThisIDsOnly
  >('EvidencijaPismena/PredmetBrowseThisIDsOnly');
  export interface PredmetBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PredmetWithRecompileInfo = createStructureInfo<
    EvidencijaPismena.PredmetWithRecompile
  >('EvidencijaPismena/PredmetWithRecompile');
  export interface PredmetWithRecompile {
    ID: string;
    Predmet_WithRecompile?: boolean;
  }

  export const PredmetLookupInfo = createStructureInfo<EvidencijaPismena.PredmetLookup>(
    'EvidencijaPismena/PredmetLookup'
  );
  export interface PredmetLookup {
    ID: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    UstrojstvenaJedinicaID?: string;
    GlavniPredmetID?: string;
    PosebnaOznakaPredmeta?: string;
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
    Predmet_WithRecompile?: boolean;
    Active?: boolean;
  }

  export const PredmetFilterPravoUvidaInfo = createStructureInfo<
    EvidencijaPismena.PredmetFilterPravoUvida
  >('EvidencijaPismena/PredmetFilterPravoUvida');
  export interface PredmetFilterPravoUvida {
    Pattern?: string;
  }

  export const PredmetQuickSearchWithActiveInfo = createStructureInfo<
    EvidencijaPismena.PredmetQuickSearchWithActive
  >('EvidencijaPismena/PredmetQuickSearchWithActive');
  export interface PredmetQuickSearchWithActive {
    Pattern?: string;
  }

  export const PredmetQuickSearchInfo = createStructureInfo<EvidencijaPismena.PredmetQuickSearch>(
    'EvidencijaPismena/PredmetQuickSearch'
  );
  export interface PredmetQuickSearch {
    Pattern?: string;
  }

  export const ReferenceNonexistentUNadleznostiInfo = createStructureInfo<
    EvidencijaPismena.ReferenceNonexistentUNadleznosti
  >('EvidencijaPismena/ReferenceNonexistentUNadleznosti');
  export interface ReferenceNonexistentUNadleznosti {}

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIdsInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIds
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIds');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIds {
    IDS?: string;
    PredmetOrPismenoID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznostiInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznosti
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznosti');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznosti {
    ID?: string;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanjaInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanja
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanja');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanja {
    DatumOsnivanja?: Date;
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_History
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_History');
  export interface UstrojstvenaJedinicaIliZaposlenik_History {
    ID: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    EntityID?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
    PotpunaBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    BrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    BrOznakaNazivUstrojstvenaJedinicaNazivUSastavuNaziv?: string;
    Active?: boolean;
    IsZaposlenik?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookup
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookup');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookup {
    ID: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    EntityID?: string;
    Active?: boolean;
    IsZaposlenik?: boolean;
    BrojcanaOznaka?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetIdInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetId
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetId');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetId {
    ID?: string;
  }

  export const PredmetDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.PredmetDodatnaOznaka
  >('EvidencijaPismena/PredmetDodatnaOznaka');
  export interface PredmetDodatnaOznaka {
    ID: string;
    OznakaID: string;
    PredmetID: string;
  }

  export const UpdatePredmetDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.UpdatePredmetDodatnaOznaka
  >('EvidencijaPismena/UpdatePredmetDodatnaOznaka');
  export interface UpdatePredmetDodatnaOznaka {
    PredmetID?: string;
    DodatneOznake?: string;
  }

  export const PredmetDmsDokumentInfo = createStructureInfo<EvidencijaPismena.PredmetDmsDokument>(
    'EvidencijaPismena/PredmetDmsDokument'
  );
  export interface PredmetDmsDokument {
    ID: string;
    PredmetID?: string;
    DokumentID?: string;
  }

  export const PredmetNadleznostExtendedInfo = createStructureInfo<
    EvidencijaPismena.PredmetNadleznostExtended
  >('EvidencijaPismena/PredmetNadleznostExtended');
  export interface PredmetNadleznostExtended {
    ID: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const PredmetStatusExtendedInfo = createStructureInfo<
    EvidencijaPismena.PredmetStatusExtended
  >('EvidencijaPismena/PredmetStatusExtended');
  export interface PredmetStatusExtended {
    ID: string;
    StatusPredmetaNaziv?: string;
    StatusPredmetaSifra?: number;
    DatumStatusa?: Date;
    Active?: boolean;
    Povezivanje?: string;
    KatalogTijekaPostupanjaID?: string;
    StatusPredmetaID?: string;
    TipPredmetaID?: string;
  }

  export const PredmetStatusComputedInfo = createStructureInfo<
    EvidencijaPismena.PredmetStatusComputed
  >('EvidencijaPismena/PredmetStatusComputed');
  export interface PredmetStatusComputed {
    ID: string;
    StatusPredmetaID?: string;
    KatalogTijekaPostupanjaID?: string;
    DatumStatusa?: Date;
    StatusPredmetaSifra?: number;
    TipPredmetaID?: string;
    Active?: boolean;
    Povezivanje?: string;
    Razvodjenje?: string;
    NivoStupnjaTajnosti?: number;
    PrefiksKlaseStupnjaTajnosti?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetStatusPersistedInfo = createStructureInfo<
    EvidencijaPismena.PredmetStatusPersisted
  >('EvidencijaPismena/PredmetStatusPersisted');
  export interface PredmetStatusPersisted {
    ID: string;
    DatumStatusa?: Date;
    Razvodjenje?: string;
    PrefiksKlaseStupnjaTajnosti?: string;
    Povezivanje?: string;
    StatusPredmetaSifra?: number;
    NivoStupnjaTajnosti?: number;
    Active?: boolean;
    StatusPredmetaID?: string;
    KatalogTijekaPostupanjaID?: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetiUObradiTotalCountInfo = createStructureInfo<
    EvidencijaPismena.PredmetiUObradiTotalCount
  >('EvidencijaPismena/PredmetiUObradiTotalCount');
  export interface PredmetiUObradiTotalCount {
    ID: string;
    TotalCount?: number;
  }

  export const GetInfo = createStructureInfo<EvidencijaPismena.Get>('EvidencijaPismena/Get');
  export interface Get {}

  export const PredmetBrisanjeInfo = createStructureInfo<EvidencijaPismena.PredmetBrisanje>(
    'EvidencijaPismena/PredmetBrisanje'
  );
  export interface PredmetBrisanje {
    ID: string;
    PredmetID: string;
    DatumKreiranja?: Date;
    JePonistavanjeBrisanja: boolean;
    ActiveReason?: string;
    KreiraoID: string;
  }

  export const ValidForPredmetDeleteInfo = createStructureInfo<
    EvidencijaPismena.ValidForPredmetDelete
  >('EvidencijaPismena/ValidForPredmetDelete');
  export interface ValidForPredmetDelete {}

  export const BrisanjePredmetaInfo = createStructureInfo<EvidencijaPismena.BrisanjePredmeta>(
    'EvidencijaPismena/BrisanjePredmeta'
  );
  export interface BrisanjePredmeta {
    PredmetID: string;
    IsActive: boolean;
    ActiveReason?: string;
  }

  export const ComputePredmetFTSKljucneRijeciInfo = createStructureInfo<
    EvidencijaPismena.ComputePredmetFTSKljucneRijeci
  >('EvidencijaPismena/ComputePredmetFTSKljucneRijeci');
  export interface ComputePredmetFTSKljucneRijeci {
    ID: string;
    KljucneRijeci?: string;
    PredmetNaziv?: string;
  }

  export const PredmetExtensionsDefinitionInfo = createStructureInfo<
    EvidencijaPismena.PredmetExtensionsDefinition
  >('EvidencijaPismena/PredmetExtensionsDefinition');
  export interface PredmetExtensionsDefinition {
    ID: string;
    Field?: string;
    FieldValue?: string;
    ControllerName: string;
    ViewModelType: string;
  }

  export const PredmetFtsComputedInfo = createStructureInfo<EvidencijaPismena.PredmetFtsComputed>(
    'EvidencijaPismena/PredmetFtsComputed'
  );
  export interface PredmetFtsComputed {
    ID: string;
    FtsContent?: string;
  }

  export const PredmetFtsInfo = createStructureInfo<EvidencijaPismena.PredmetFts>(
    'EvidencijaPismena/PredmetFts'
  );
  export interface PredmetFts {
    ID: string;
    FtsContent?: string;
  }

  export const PodatakZaGeneriranjeKlasifikacijskeOznakePredmetaInfo = createStructureInfo<
    EvidencijaPismena.PodatakZaGeneriranjeKlasifikacijskeOznakePredmeta
  >('EvidencijaPismena/PodatakZaGeneriranjeKlasifikacijskeOznakePredmeta');
  export interface PodatakZaGeneriranjeKlasifikacijskeOznakePredmeta {
    ID?: string;
    PredmetID?: string;
    DosjeID?: string;
    PosebnaOznakaPredmeta?: string;
    VrstaUpravnosti?: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    GodinaOtvaranjaPredmeta?: number;
    GodinaOtvaranjaPredmetaKratka?: string;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const ParametriGeneriranjaKlasifikacijskeOznakeInfo = createStructureInfo<
    EvidencijaPismena.ParametriGeneriranjaKlasifikacijskeOznake
  >('EvidencijaPismena/ParametriGeneriranjaKlasifikacijskeOznake');
  export interface ParametriGeneriranjaKlasifikacijskeOznake {
    ID: string;
    DodavnjeNulaDoBrojaZnamenki: number;
  }

  export const ComputePredmetKlasifikatorInfo = createStructureInfo<
    EvidencijaPismena.ComputePredmetKlasifikator
  >('EvidencijaPismena/ComputePredmetKlasifikator');
  export interface ComputePredmetKlasifikator {
    ID: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    VrstaUpravnosti?: string;
    Godina?: number;
    MaxRbrUnutarGodineIDosjea?: number;
  }

  export const PredmetKlasifikatorInfo = createStructureInfo<EvidencijaPismena.PredmetKlasifikator>(
    'EvidencijaPismena/PredmetKlasifikator'
  );
  export interface PredmetKlasifikator {
    ID: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    VrstaUpravnosti?: string;
    Godina?: number;
    MaxRbrUnutarGodineIDosjea?: number;
  }

  export const PredmetRedniBrojResultInfo = createStructureInfo<
    EvidencijaPismena.PredmetRedniBrojResult
  >('EvidencijaPismena/PredmetRedniBrojResult');
  export interface PredmetRedniBrojResult {
    MaxRbrUnutarGodineIDosjea?: number;
    DodavnjeNulaDoBrojaZnamenki?: number;
  }

  export const PredmetInicialnoStanjeInfo = createStructureInfo<
    EvidencijaPismena.PredmetInicialnoStanje
  >('EvidencijaPismena/PredmetInicialnoStanje');
  export interface PredmetInicialnoStanje {
    ID: string;
    DatumOsnivanja?: Date;
    DosjeID?: string;
    Naziv?: string;
    UNadleznostiID?: string;
  }

  export const SavePredmetiInicialnoStanjeInfo = createStructureInfo<
    EvidencijaPismena.SavePredmetiInicialnoStanje
  >('EvidencijaPismena/SavePredmetiInicialnoStanje');
  export interface SavePredmetiInicialnoStanje {
    PredmetIDs?: string;
  }

  export const PredmetPismenoBrowseInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoBrowse
  >('EvidencijaPismena/PredmetPismenoBrowse');
  export interface PredmetPismenoBrowse {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const PredmetPismenoComputedInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoComputed
  >('EvidencijaPismena/PredmetPismenoComputed');
  export interface PredmetPismenoComputed {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const GetByPredmetPismenoIDsInfo = createStructureInfo<
    EvidencijaPismena.GetByPredmetPismenoIDs
  >('EvidencijaPismena/GetByPredmetPismenoIDs');
  export interface GetByPredmetPismenoIDs {
    PredmetPismenoListJson?: string;
  }

  export const AllowPredmetPermissionsInfo = createStructureInfo<
    EvidencijaPismena.AllowPredmetPermissions
  >('EvidencijaPismena/AllowPredmetPermissions');
  export interface AllowPredmetPermissions {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    EksplicitnaPravaRadaPredmetomAddID?: string;
    VezaniPredmetiSEksplicitnimPravimaID?: string;
    PredmetPravoPristupaRadomUpravljaID?: string;
    PredmetiOvlasteniSluzbeniciUJOvlasteniSluzbeniciNadlezneUJID?: string;
    PredmetiPravoUvidaSluzbeniciUJOvlasteniSluzbeniciNadlezneUJID?: string;
    KorisniciSPravimaNadZapisimaNekogDjelatnikaKorisniciSPravimaNadZapisimaNekogDjelatnikaID?: string;
    KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaID?: string;
    PredmetUNadleznostiZaposlenikaID?: string;
    PodsjetnikPravoPrekoPodsjetnikaID?: string;
  }

  export const DenyPredmetPermissionsInfo = createStructureInfo<
    EvidencijaPismena.DenyPredmetPermissions
  >('EvidencijaPismena/DenyPredmetPermissions');
  export interface DenyPredmetPermissions {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    DenyPredmetPermissionsPovjerljiviUrudzbeniPovjerljiviUrudzbeniID?: string;
  }

  export const PredmetPermissionsInfo = createStructureInfo<EvidencijaPismena.PredmetPermissions>(
    'EvidencijaPismena/PredmetPermissions'
  );
  export interface PredmetPermissions {
    ID: string;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const EksplicitnaPravaRadaPredmetomInfo = createStructureInfo<
    EvidencijaPismena.EksplicitnaPravaRadaPredmetom
  >('EvidencijaPismena/EksplicitnaPravaRadaPredmetom');
  export interface EksplicitnaPravaRadaPredmetom {
    PredmetID?: string;
    DatumOd?: Date;
    DodaoPravaID?: string;
    SluzbenikID?: string;
    Subtype?: string;
  }

  export const ComputeEksplicitnaPravaRadaPredmetomAddInfo = createStructureInfo<
    EvidencijaPismena.ComputeEksplicitnaPravaRadaPredmetomAdd
  >('EvidencijaPismena/ComputeEksplicitnaPravaRadaPredmetomAdd');
  export interface ComputeEksplicitnaPravaRadaPredmetomAdd {
    ID: string;
    PredmetID?: string;
    IsPravoRadaIliUvida?: boolean;
    ZaposlenikID?: string;
  }

  export const EksplicitnaPravaRadaPredmetomAddInfo = createStructureInfo<
    EvidencijaPismena.EksplicitnaPravaRadaPredmetomAdd
  >('EvidencijaPismena/EksplicitnaPravaRadaPredmetomAdd');
  export interface EksplicitnaPravaRadaPredmetomAdd {
    ID: string;
    IsPravoRadaIliUvida?: boolean;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const VezaniPredmetiSEksplicitnimPravimaInfo = createStructureInfo<
    EvidencijaPismena.VezaniPredmetiSEksplicitnimPravima
  >('EvidencijaPismena/VezaniPredmetiSEksplicitnimPravima');
  export interface VezaniPredmetiSEksplicitnimPravima {
    ID: string;
    PredmetID?: string;
    SluzbenikID?: string;
    DatumOd?: Date;
  }

  export const PredmetPravoPristupaInfo = createStructureInfo<
    EvidencijaPismena.PredmetPravoPristupa
  >('EvidencijaPismena/PredmetPravoPristupa');
  export interface PredmetPravoPristupa {
    ID: string;
    GlavniPredmetID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetiOvlasteniSluzbeniciUJInfo = createStructureInfo<
    EvidencijaPismena.PredmetiOvlasteniSluzbeniciUJ
  >('EvidencijaPismena/PredmetiOvlasteniSluzbeniciUJ');
  export interface PredmetiOvlasteniSluzbeniciUJ {
    ID: string;
  }

  export const PredmetiPravoUvidaSluzbeniciUJInfo = createStructureInfo<
    EvidencijaPismena.PredmetiPravoUvidaSluzbeniciUJ
  >('EvidencijaPismena/PredmetiPravoUvidaSluzbeniciUJ');
  export interface PredmetiPravoUvidaSluzbeniciUJ {
    ID: string;
  }

  export const KorisniciSPravimaNadZapisimaNekogDjelatnikaInfo = createStructureInfo<
    EvidencijaPismena.KorisniciSPravimaNadZapisimaNekogDjelatnika
  >('EvidencijaPismena/KorisniciSPravimaNadZapisimaNekogDjelatnika');
  export interface KorisniciSPravimaNadZapisimaNekogDjelatnika {
    ID: string;
  }

  export const KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaInfo = createStructureInfo<
    EvidencijaPismena.KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika
  >('EvidencijaPismena/KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika');
  export interface KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika {
    ID: string;
  }

  export const AllowReadPredmetZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.AllowReadPredmetZaposlenik
  >('EvidencijaPismena/AllowReadPredmetZaposlenik');
  export interface AllowReadPredmetZaposlenik {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    AllowReadWritePredmetZaposlenik_MaterializedID?: string;
    UstrojstvoPravoRadaZaposlenikaPoPredmetimaID?: string;
    UstrojstvoPravoRadaZaposlenikaPoDijeljenimPredmetimaID?: string;
    EksplicitnaPravaRadaPredmetomAddAllowReadPredmetZaposlenikID?: string;
  }

  export const AllowReadPredmetZaposlenik_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadPredmetZaposlenik_Materialized
  >('EvidencijaPismena/AllowReadPredmetZaposlenik_Materialized');
  export interface AllowReadPredmetZaposlenik_Materialized {
    ID: string;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const AllowReadWritePredmetZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWritePredmetZaposlenik
  >('EvidencijaPismena/AllowReadWritePredmetZaposlenik');
  export interface AllowReadWritePredmetZaposlenik {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PodsjetnikID?: string;
    UstrojstvoPravoRadaZaposlenikaPoPredmetimaID?: string;
    UstrojstvoPravoRadaZaposlenikaPoDijeljenimPredmetimaID?: string;
    EksplicitnaPravaRadaPredmetomAddAllowReadWritePredmetZaposlenikID?: string;
  }

  export const AllowReadWritePredmetZaposlenik_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWritePredmetZaposlenik_Materialized
  >('EvidencijaPismena/AllowReadWritePredmetZaposlenik_Materialized');
  export interface AllowReadWritePredmetZaposlenik_Materialized {
    ID: string;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const AllowReadZaposlenikUstrojstvenaJedinicaInfo = createStructureInfo<
    EvidencijaPismena.AllowReadZaposlenikUstrojstvenaJedinica
  >('EvidencijaPismena/AllowReadZaposlenikUstrojstvenaJedinica');
  export interface AllowReadZaposlenikUstrojstvenaJedinica {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Subtype?: string;
    AllowReadWriteZaposlenikUstrojstvenaJedinica_MaterializedID?: string;
    UstrojstvoSluzbenikUstrojstveneJediniceSPravomUvidaID?: string;
  }

  export const AllowReadZaposlenikUstrojstvenaJedinica_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadZaposlenikUstrojstvenaJedinica_Materialized
  >('EvidencijaPismena/AllowReadZaposlenikUstrojstvenaJedinica_Materialized');
  export interface AllowReadZaposlenikUstrojstvenaJedinica_Materialized {
    ID: string;
    ZaposlenikID: string;
    UstrojstvenaJedinicaID: string;
  }

  export const AllowReadWriteZaposlenikUstrojstvenaJedinicaInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWriteZaposlenikUstrojstvenaJedinica
  >('EvidencijaPismena/AllowReadWriteZaposlenikUstrojstvenaJedinica');
  export interface AllowReadWriteZaposlenikUstrojstvenaJedinica {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Subtype?: string;
    UstrojstvoUstrojstvenaJedinicaOvlasteniSluzbenikID?: string;
  }

  export const AllowReadWriteZaposlenikUstrojstvenaJedinica_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.AllowReadWriteZaposlenikUstrojstvenaJedinica_Materialized
  >('EvidencijaPismena/AllowReadWriteZaposlenikUstrojstvenaJedinica_Materialized');
  export interface AllowReadWriteZaposlenikUstrojstvenaJedinica_Materialized {
    ID: string;
    ZaposlenikID: string;
    UstrojstvenaJedinicaID: string;
  }

  export const PredmetPromijeniTipInfo = createStructureInfo<EvidencijaPismena.PredmetPromijeniTip>(
    'EvidencijaPismena/PredmetPromijeniTip'
  );
  export interface PredmetPromijeniTip {
    ID: string;
    PredmetID: string;
    DatumKreiranja?: Date;
    TipPredmetaID: string;
    KorisnikID?: string;
  }

  export const PredmetPromijeniTipBrowseInfo = createStructureInfo<
    EvidencijaPismena.PredmetPromijeniTipBrowse
  >('EvidencijaPismena/PredmetPromijeniTipBrowse');
  export interface PredmetPromijeniTipBrowse {
    ID: string;
    PredmetID?: string;
    TipPredmetaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const PredmetUpozorenjeInfo = createStructureInfo<EvidencijaPismena.PredmetUpozorenje>(
    'EvidencijaPismena/PredmetUpozorenje'
  );
  export interface PredmetUpozorenje {
    ID: string;
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    DatumIzmjeneUstrojstva?: Date;
    PredmetID?: string;
    Nadleznost?: string;
    Opis?: string;
    TipUpozorenja?: number;
    UNadleznostiID?: string;
  }

  export const PredmetUpozorenjeSearchInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpozorenjeSearch
  >('EvidencijaPismena/PredmetUpozorenjeSearch');
  export interface PredmetUpozorenjeSearch {
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    Pattern?: string;
    Nadleznost?: string;
    Opis?: string;
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    DatumIzmjeneUstrojstvaOd?: Date;
    DatumIzmjeneUstrojstvaDo?: Date;
    IDs?: string;
  }

  export const PredmetUpozorenjeIgnoriranoInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpozorenjeIgnorirano
  >('EvidencijaPismena/PredmetUpozorenjeIgnorirano');
  export interface PredmetUpozorenjeIgnorirano {
    ID: string;
    PredmetID?: string;
    DatumIzmjeneUstrojstva?: Date;
    TipUpozorenja?: number;
    DatumPotvrde?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    PotvrdioID?: string;
    UNadleznostiID?: string;
  }

  export const UpsertPredmetUpozorenjeIgnoriranoInfo = createStructureInfo<
    EvidencijaPismena.UpsertPredmetUpozorenjeIgnorirano
  >('EvidencijaPismena/UpsertPredmetUpozorenjeIgnorirano');
  export interface UpsertPredmetUpozorenjeIgnorirano {
    PredmetID?: string;
    UNadleznostiID?: string;
    DatumIzmjeneUstrojstva?: Date;
    TipUpozorenja?: number;
  }

  export const PredmetUpravnogPostupkaIIStupnjaInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpravnogPostupkaIIStupnja
  >('EvidencijaPismena/PredmetUpravnogPostupkaIIStupnja');
  export interface PredmetUpravnogPostupkaIIStupnja {
    ID: string;
    StvarnaNadleznost?: string;
    MjesnaNadleznost?: string;
    TijeloKojeJeDonijeloIliNijeDonijeloPrvostupanjskoRijesenja?: string;
    DatumOdlukeOZalbi?: Date;
    URoku?: boolean;
    PostupakObustavljen?: Date;
    Revizija?: Date;
    KlasifikacijskaOznakaPredmetaUpravnogPostupkaIStupnjaPoKojemJePodnesenaZalba?: string;
    ZalbaPoDrugostupanjskomTijeluID?: string;
  }

  export const UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijeluInfo = createStructureInfo<
    EvidencijaPismena.UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijelu
  >('EvidencijaPismena/UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijelu');
  export interface UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    PredmetID?: string;
    Razlozi?: string;
  }

  export const PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijeluInfo = createStructureInfo<
    EvidencijaPismena.PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijelu
  >('EvidencijaPismena/PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijelu');
  export interface PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    ID: string;
    PredmetID: string;
    RazlogID: string;
  }

  export const ZalbaPoDrugostupanjskomTijeluInfo = createStructureInfo<
    EvidencijaPismena.ZalbaPoDrugostupanjskomTijelu
  >('EvidencijaPismena/ZalbaPoDrugostupanjskomTijelu');
  export interface ZalbaPoDrugostupanjskomTijelu {
    ID: string;
    Oznaka: string;
    Naziv: string;
    ImaRazloge: boolean;
  }

  export const RazlogUsvajanjeZalbePoDrugostupanjskomTijeluInfo = createStructureInfo<
    EvidencijaPismena.RazlogUsvajanjeZalbePoDrugostupanjskomTijelu
  >('EvidencijaPismena/RazlogUsvajanjeZalbePoDrugostupanjskomTijelu');
  export interface RazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    ID: string;
    Oznaka: string;
    Naziv: string;
  }

  export const PredmetUpravnogPostupkaIStupnjaInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpravnogPostupkaIStupnja
  >('EvidencijaPismena/PredmetUpravnogPostupkaIStupnja');
  export interface PredmetUpravnogPostupkaIStupnja {
    ID: string;
    StvarnaNadleznost?: string;
    MjesnaNadleznost?: string;
    DatumOdlukeOZahtjevu?: Date;
    URoku?: boolean;
    DatumOdlukeOZalbi?: Date;
    PostupakObustavljen?: Date;
    ZalbaPoPrvostupanjskomTijeluID?: string;
    OdlukaOZahtjevuID?: string;
  }

  export const ZalbaPoPrvostupanjskomTijeluInfo = createStructureInfo<
    EvidencijaPismena.ZalbaPoPrvostupanjskomTijelu
  >('EvidencijaPismena/ZalbaPoPrvostupanjskomTijelu');
  export interface ZalbaPoPrvostupanjskomTijelu {
    ID: string;
    Oznaka: string;
    Naziv: string;
  }

  export const OdlukaOZahtjevuInfo = createStructureInfo<EvidencijaPismena.OdlukaOZahtjevu>(
    'EvidencijaPismena/OdlukaOZahtjevu'
  );
  export interface OdlukaOZahtjevu {
    ID: string;
    Oznaka: string;
    Naziv: string;
  }

  export const ComputePredmetPismenoPrilogFTSInfo = createStructureInfo<
    EvidencijaPismena.ComputePredmetPismenoPrilogFTS
  >('EvidencijaPismena/ComputePredmetPismenoPrilogFTS');
  export interface ComputePredmetPismenoPrilogFTS {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    GlavniPredmetID?: string;
    TipDokumenta?: string;
    Naziv?: string;
    KljucneRijeciOsnovno?: string;
    PredmetKljucneRijeciOstalo?: string;
    PismenoKljucneRijeciOstalo?: string;
    PrilogKljucneRijeciOstalo?: string;
    PrilogID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetPismenoPrilogFTSInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoPrilogFTS
  >('EvidencijaPismena/PredmetPismenoPrilogFTS');
  export interface PredmetPismenoPrilogFTS {
    ID: string;
    TipDokumenta?: string;
    Naziv?: string;
    KljucneRijeciOsnovno?: string;
    PredmetKljucneRijeciOstalo?: string;
    PismenoKljucneRijeciOstalo?: string;
    PrilogKljucneRijeciOstalo?: string;
    GlavniPredmetID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
    PredmetID?: string;
    PismenoID?: string;
    PrilogID?: string;
    CTXPismenoID?: string;
    CTXPredmetID?: string;
    CTXPrilogID?: string;
  }

  export const PredmetPismenoPrilogPreparedInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoPrilogPrepared
  >('EvidencijaPismena/PredmetPismenoPrilogPrepared');
  export interface PredmetPismenoPrilogPrepared {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    TipDokumenta?: string;
    PredmetOznakaUpravnosti?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PredmetUNadleznosti?: string;
    PredmetNadleznaJedinicaBrojcanaOznaka?: string;
    PredmetStranka?: string;
    PredmetDatumOsnivanja?: Date;
    PredmetRokZaRjesavanje?: Date;
    PredmetDosjeNaziv?: string;
    PredmetDjelatnostNaziv?: string;
    PredmetLokacijaNaziv?: string;
    PredmetBarkod?: string;
    PredmetDodatneStranke?: string;
    PismenoJePodnesak?: boolean;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PismenoPosiljateljPodnositeljIliStvaratelj?: string;
    PismenoDatumNastankaAktaUliPrimitkaPismena?: Date;
    PismenoKlasifikacijskiBrojPosiljatelja?: string;
    PismenoUrudzbeniBrojPosiljatelja?: string;
    Active?: boolean;
    PismenoVrijednost?: string;
    PismenoSluzbenaBiljeska?: string;
    PismenoNaKojeJePrilozenaOmotnica?: string;
    PismenoDatumNastanka?: Date;
    PismenoBarkod?: string;
    PismenoBrojPriloga?: number;
    PismenoDodatnaOznaka?: string;
    NazivPriloga?: string;
    Stvaratelj?: string;
    DatumNastankaPriloga?: Date;
    VrstaPriloga?: string;
    PrilogBiljeska?: string;
    Naziv?: string;
    Stranka?: string;
    DatumStvaranja?: Date;
    GlavniPredmetID?: string;
    PrilogID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const FTSUpitiZaIgnoriratiInfo = createStructureInfo<
    EvidencijaPismena.FTSUpitiZaIgnorirati
  >('EvidencijaPismena/FTSUpitiZaIgnorirati');
  export interface FTSUpitiZaIgnorirati {
    ID: string;
    Pattern?: string;
  }

  export const PredmetPismenoPrilogInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoPrilog
  >('EvidencijaPismena/PredmetPismenoPrilog');
  export interface PredmetPismenoPrilog {
    ID: string;
    TipDokumenta?: string;
    PredmetID?: string;
    PredmetOznakaUpravnosti?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PredmetUNadleznosti?: string;
    PredmetNadleznaJedinicaBrojcanaOznaka?: string;
    PredmetStranka?: string;
    PredmetDatumOsnivanja?: Date;
    PredmetRokZaRjesavanje?: Date;
    PredmetDosjeNaziv?: string;
    PredmetDjelatnostNaziv?: string;
    PredmetLokacijaNaziv?: string;
    PredmetBarkod?: string;
    PredmetDodatneStranke?: string;
    PismenoID?: string;
    PrilogID?: string;
    PismenoJePodnesak?: boolean;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PismenoPosiljateljPodnositeljIliStvaratelj?: string;
    PismenoDatumNastankaAktaUliPrimitkaPismena?: Date;
    PismenoKlasifikacijskiBrojPosiljatelja?: string;
    PismenoUrudzbeniBrojPosiljatelja?: string;
    Active?: boolean;
    PismenoVrijednost?: string;
    PismenoSluzbenaBiljeska?: string;
    PismenoNaKojeJePrilozenaOmotnica?: string;
    PismenoDatumNastanka?: Date;
    PismenoBarkod?: string;
    PismenoBrojPriloga?: number;
    PismenoDodatnaOznaka?: string;
    NazivPriloga?: string;
    Stvaratelj?: string;
    DatumNastankaPriloga?: Date;
    VrstaPriloga?: string;
    PrilogBiljeska?: string;
    Naziv?: string;
    Stranka?: string;
    DatumStvaranja?: Date;
    UstrojstvenaJedinicaID?: string;
    GlavniPredmetID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetPismenoPrilogSmartSearchAutoCompleteInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoPrilogSmartSearchAutoComplete
  >('EvidencijaPismena/PredmetPismenoPrilogSmartSearchAutoComplete');
  export interface PredmetPismenoPrilogSmartSearchAutoComplete {
    ID: string;
    Barkod?: string;
  }

  export const PredmetPismenoPrilogSearchInfo = createStructureInfo<
    EvidencijaPismena.PredmetPismenoPrilogSearch
  >('EvidencijaPismena/PredmetPismenoPrilogSearch');
  export interface PredmetPismenoPrilogSearch {
    Pattern?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    TipDatuma?: string;
    TipDokumenta?: string;
  }

  export const PrilogInfo = createStructureInfo<EvidencijaPismena.Prilog>(
    'EvidencijaPismena/Prilog'
  );
  export interface Prilog {
    ID: string;
    PredmetID: string;
    PismenoID?: string;
    DatumNastanka: Date;
    Naziv: string;
    Biljeska?: string;
    Barkod?: string;
    VrstaPrilogaID: string;
    StvarateljID?: string;
    Active?: boolean;
  }

  export const DocumentTemplatePrilogDsInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePrilogDs
  >('EvidencijaPismena/DocumentTemplatePrilogDs');
  export interface DocumentTemplatePrilogDs {
    ID: string;
    PredmetKlasa?: string;
    PredmetNaziv?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetBarkod?: string;
    PredmetUstrojstvenaJedinicaNaziv?: string;
    PredmetReferent?: string;
    PredmetLokacijaNaziv?: string;
    PredmetLokacijaAdresa?: string;
    PrilogBarkod?: string;
    PrilogNaziv?: string;
    PrilogDatumNastanka?: string;
    PrilogDatumNastankaTekst?: string;
    PrilogBiljeska?: string;
    PrilogVrstaPrilogaNaziv?: string;
    StrankaNaziv?: string;
    StrankaUlicaIKucniBroj?: string;
    StrankaPostanskiBroj?: string;
    StrankaMjestoNaziv?: string;
    StrankaDrzavaSluzbeniNaziv?: string;
    StrankaOib?: string;
    StrankaMbg?: string;
    StrankaMbs?: string;
    StrankaMb?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    MigriraniBarkodPrilog?: string;
    PredmetSignatura?: string;
    PredmetZaduzenje?: string;
  }

  export const GetByPismenoIDsInfo = createStructureInfo<EvidencijaPismena.GetByPismenoIDs>(
    'EvidencijaPismena/GetByPismenoIDs'
  );
  export interface GetByPismenoIDs {
    PismenoIDs?: string;
  }

  export const GetPismenoPriloziInfo = createStructureInfo<EvidencijaPismena.GetPismenoPrilozi>(
    'EvidencijaPismena/GetPismenoPrilozi'
  );
  export interface GetPismenoPrilozi {}

  export const GetPredmetPriloziInfo = createStructureInfo<EvidencijaPismena.GetPredmetPrilozi>(
    'EvidencijaPismena/GetPredmetPrilozi'
  );
  export interface GetPredmetPrilozi {}

  export const PrilogAdditionalDataInfo = createStructureInfo<
    EvidencijaPismena.PrilogAdditionalData
  >('EvidencijaPismena/PrilogAdditionalData');
  export interface PrilogAdditionalData {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const PrilogUnosInfo = createStructureInfo<EvidencijaPismena.PrilogUnos>(
    'EvidencijaPismena/PrilogUnos'
  );
  export interface PrilogUnos {
    ID: string;
    PrilogID: string;
    DatumVrijeme?: Date;
    KorisnikID?: string;
  }

  export const PrilogExtendedInfo = createStructureInfo<EvidencijaPismena.PrilogExtended>(
    'EvidencijaPismena/PrilogExtended'
  );
  export interface PrilogExtended {
    ID: string;
    PismenoUrudzbeniBroj?: string;
  }

  export const PriloziPismenaIPovezaniPriloziInfo = createStructureInfo<
    EvidencijaPismena.PriloziPismenaIPovezaniPrilozi
  >('EvidencijaPismena/PriloziPismenaIPovezaniPrilozi');
  export interface PriloziPismenaIPovezaniPrilozi {
    ID: string;
    PismenoID?: string;
    PrilogID?: string;
  }

  export const PriloziPredmetiIPovezaniPriloziInfo = createStructureInfo<
    EvidencijaPismena.PriloziPredmetiIPovezaniPrilozi
  >('EvidencijaPismena/PriloziPredmetiIPovezaniPrilozi');
  export interface PriloziPredmetiIPovezaniPrilozi {
    ID: string;
    PredmetID?: string;
    PrilogID?: string;
  }

  export const PrilogBrowseInfo = createStructureInfo<EvidencijaPismena.PrilogBrowse>(
    'EvidencijaPismena/PrilogBrowse'
  );
  export interface PrilogBrowse {
    ID: string;
    DatumNastanka?: Date;
    Naziv?: string;
    PredmetID?: string;
    PismenoID?: string;
    Barkod?: string;
    Active?: boolean;
    VrstaPrilogaNaziv?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PismenoUrudzbeniBroj?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    StupanjTajnosti?: string;
  }

  export const PrilogBrowseThisIDsOnlyInfo = createStructureInfo<
    EvidencijaPismena.PrilogBrowseThisIDsOnly
  >('EvidencijaPismena/PrilogBrowseThisIDsOnly');
  export interface PrilogBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PrilogBrowseIPovezaniInfo = createStructureInfo<
    EvidencijaPismena.PrilogBrowseIPovezani
  >('EvidencijaPismena/PrilogBrowseIPovezani');
  export interface PrilogBrowseIPovezani {
    PismenoID?: string;
  }

  export const PrilogPredmetBrowseIPovezaniInfo = createStructureInfo<
    EvidencijaPismena.PrilogPredmetBrowseIPovezani
  >('EvidencijaPismena/PrilogPredmetBrowseIPovezani');
  export interface PrilogPredmetBrowseIPovezani {
    PredmetID?: string;
  }

  export const DeletePrilogInfo = createStructureInfo<EvidencijaPismena.DeletePrilog>(
    'EvidencijaPismena/DeletePrilog'
  );
  export interface DeletePrilog {
    PrilogID: string;
  }

  export const PrilogBarkodInfo = createStructureInfo<EvidencijaPismena.PrilogBarkod>(
    'EvidencijaPismena/PrilogBarkod'
  );
  export interface PrilogBarkod {
    ID: string;
    Barkod?: string;
    PismenoBarkod?: string;
    PredmetBarkod?: string;
  }

  export const PrilogLookupInfo = createStructureInfo<EvidencijaPismena.PrilogLookup>(
    'EvidencijaPismena/PrilogLookup'
  );
  export interface PrilogLookup {
    ID: string;
    Active?: boolean;
    Biljeska?: string;
    Barkod?: string;
    Naziv?: string;
    PredmetKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
  }

  export const UpsertPrilogInfo = createStructureInfo<EvidencijaPismena.UpsertPrilog>(
    'EvidencijaPismena/UpsertPrilog'
  );
  export interface UpsertPrilog {
    Prilog: string;
    StupanjTajnostiID?: string;
  }

  export const PismenoStatusPersistedInfo = createStructureInfo<
    EvidencijaPismena.PismenoStatusPersisted
  >('EvidencijaPismena/PismenoStatusPersisted');
  export interface PismenoStatusPersisted {
    ID: string;
    DodatneOznake?: string;
    NivoStupnjaTajnosti?: number;
    Active?: boolean;
    PredmetID?: string;
    StatusPismenaID?: string;
    StupanjTajnostiID?: string;
  }

  export const BrisanjeAktiviranjePrilogaInfo = createStructureInfo<
    EvidencijaPismena.BrisanjeAktiviranjePriloga
  >('EvidencijaPismena/BrisanjeAktiviranjePriloga');
  export interface BrisanjeAktiviranjePriloga {
    PrilogID?: string;
    IsActive?: boolean;
  }

  export const PismenoPrilogBrowseInfo = createStructureInfo<EvidencijaPismena.PismenoPrilogBrowse>(
    'EvidencijaPismena/PismenoPrilogBrowse'
  );
  export interface PismenoPrilogBrowse {
    ID: string;
    PrilogID?: string;
    PismenoID?: string;
    Barkod?: string;
    PrilogNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const PismenoPrilogComputedInfo = createStructureInfo<
    EvidencijaPismena.PismenoPrilogComputed
  >('EvidencijaPismena/PismenoPrilogComputed');
  export interface PismenoPrilogComputed {
    ID: string;
    PrilogID?: string;
    PismenoID?: string;
    Barkod?: string;
    PrilogNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const GetByPismenoPrilogIDsInfo = createStructureInfo<
    EvidencijaPismena.GetByPismenoPrilogIDs
  >('EvidencijaPismena/GetByPismenoPrilogIDs');
  export interface GetByPismenoPrilogIDs {
    PismenoPrilogListJson?: string;
  }

  export const PrilogPismenoPovezivanjeEventInfo = createStructureInfo<
    EvidencijaPismena.PrilogPismenoPovezivanjeEvent
  >('EvidencijaPismena/PrilogPismenoPovezivanjeEvent');
  export interface PrilogPismenoPovezivanjeEvent {
    ID: string;
    PismenoID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PrilogPismenoPonistavanjePovezivanjaEventInfo = createStructureInfo<
    EvidencijaPismena.PrilogPismenoPonistavanjePovezivanjaEvent
  >('EvidencijaPismena/PrilogPismenoPonistavanjePovezivanjaEvent');
  export interface PrilogPismenoPonistavanjePovezivanjaEvent {
    ID: string;
    PismenoID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePrilogPismenoPovezaniInfo = createStructureInfo<
    EvidencijaPismena.ComputePrilogPismenoPovezani
  >('EvidencijaPismena/ComputePrilogPismenoPovezani');
  export interface ComputePrilogPismenoPovezani {
    ID: string;
    PrilogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PrilogPismenoPovezaniPersistedInfo = createStructureInfo<
    EvidencijaPismena.PrilogPismenoPovezaniPersisted
  >('EvidencijaPismena/PrilogPismenoPovezaniPersisted');
  export interface PrilogPismenoPovezaniPersisted {
    ID: string;
    PrilogID?: string;
    PismenoID?: string;
  }

  export const PrilogPismenoPovezivanjeLogInfo = createStructureInfo<
    EvidencijaPismena.PrilogPismenoPovezivanjeLog
  >('EvidencijaPismena/PrilogPismenoPovezivanjeLog');
  export interface PrilogPismenoPovezivanjeLog {
    ID: string;
    PrilogID?: string;
    PismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PrilogVezanNaPismenoBrowseInfo = createStructureInfo<
    EvidencijaPismena.PrilogVezanNaPismenoBrowse
  >('EvidencijaPismena/PrilogVezanNaPismenoBrowse');
  export interface PrilogVezanNaPismenoBrowse {
    ID: string;
    PismenoID?: string;
    PrilogID?: string;
    Naziv?: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    UrudzbeniBroj?: string;
    NazivPriloga?: string;
  }

  export const PrilogVezanNaPismenoBrowseFTSSearchInfo = createStructureInfo<
    EvidencijaPismena.PrilogVezanNaPismenoBrowseFTSSearch
  >('EvidencijaPismena/PrilogVezanNaPismenoBrowseFTSSearch');
  export interface PrilogVezanNaPismenoBrowseFTSSearch {
    Pattern?: string;
  }

  export const PrilogPredmetBrowseInfo = createStructureInfo<EvidencijaPismena.PrilogPredmetBrowse>(
    'EvidencijaPismena/PrilogPredmetBrowse'
  );
  export interface PrilogPredmetBrowse {
    ID: string;
    PrilogID?: string;
    PredmetID?: string;
    Barkod?: string;
    PredmetNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PrilogNaziv?: string;
  }

  export const PredmetPrilogComputedInfo = createStructureInfo<
    EvidencijaPismena.PredmetPrilogComputed
  >('EvidencijaPismena/PredmetPrilogComputed');
  export interface PredmetPrilogComputed {
    ID: string;
    PrilogID?: string;
    PredmetID?: string;
    Barkod?: string;
    PredmetNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PrilogNaziv?: string;
  }

  export const GetByPredmetPrilogIDsInfo = createStructureInfo<
    EvidencijaPismena.GetByPredmetPrilogIDs
  >('EvidencijaPismena/GetByPredmetPrilogIDs');
  export interface GetByPredmetPrilogIDs {
    PredmetPrilogListJson?: string;
  }

  export const PrilogPredmetPovezivanjeEventInfo = createStructureInfo<
    EvidencijaPismena.PrilogPredmetPovezivanjeEvent
  >('EvidencijaPismena/PrilogPredmetPovezivanjeEvent');
  export interface PrilogPredmetPovezivanjeEvent {
    ID: string;
    PredmetID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PrilogPredmetPonistavanjePovezivanjaEventInfo = createStructureInfo<
    EvidencijaPismena.PrilogPredmetPonistavanjePovezivanjaEvent
  >('EvidencijaPismena/PrilogPredmetPonistavanjePovezivanjaEvent');
  export interface PrilogPredmetPonistavanjePovezivanjaEvent {
    ID: string;
    PredmetID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePrilogPredmetPovezaniInfo = createStructureInfo<
    EvidencijaPismena.ComputePrilogPredmetPovezani
  >('EvidencijaPismena/ComputePrilogPredmetPovezani');
  export interface ComputePrilogPredmetPovezani {
    ID: string;
    PrilogID?: string;
    PredmetID?: string;
    DatumKreiranja?: Date;
  }

  export const PrilogPredmetPovezaniPersistedInfo = createStructureInfo<
    EvidencijaPismena.PrilogPredmetPovezaniPersisted
  >('EvidencijaPismena/PrilogPredmetPovezaniPersisted');
  export interface PrilogPredmetPovezaniPersisted {
    ID: string;
    PrilogID?: string;
    PredmetID?: string;
  }

  export const PrilogPredmetPovezivanjeLogInfo = createStructureInfo<
    EvidencijaPismena.PrilogPredmetPovezivanjeLog
  >('EvidencijaPismena/PrilogPredmetPovezivanjeLog');
  export interface PrilogPredmetPovezivanjeLog {
    ID: string;
    PrilogID?: string;
    PredmetID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PrilogVezanNaPredmetBrowseInfo = createStructureInfo<
    EvidencijaPismena.PrilogVezanNaPredmetBrowse
  >('EvidencijaPismena/PrilogVezanNaPredmetBrowse');
  export interface PrilogVezanNaPredmetBrowse {
    ID: string;
    PredmetID?: string;
    PrilogID?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PrilogVezanNaPredmetBrowseFTSSearchInfo = createStructureInfo<
    EvidencijaPismena.PrilogVezanNaPredmetBrowseFTSSearch
  >('EvidencijaPismena/PrilogVezanNaPredmetBrowseFTSSearch');
  export interface PrilogVezanNaPredmetBrowseFTSSearch {
    Pattern?: string;
  }

  export const PromjenaNadleznostiPredmetInfo = createStructureInfo<
    EvidencijaPismena.PromjenaNadleznostiPredmet
  >('EvidencijaPismena/PromjenaNadleznostiPredmet');
  export interface PromjenaNadleznostiPredmet {
    DatumVrijeme?: Date;
    PredmetID?: string;
    KorisnikID: string;
    UNadleznostiID: string;
    Subtype?: string;
    RasporedjivanjeID?: string;
    VezivanjeKaoPromjenaNadleznosti_MaterializedID?: string;
    DostavaURadDodjelaURadID?: string;
    DostavaURadUstupanjePredmetaID?: string;
  }

  export const PromjenaNadleznostiPredmetCombinedInfo = createStructureInfo<
    EvidencijaPismena.PromjenaNadleznostiPredmetCombined
  >('EvidencijaPismena/PromjenaNadleznostiPredmetCombined');
  export interface PromjenaNadleznostiPredmetCombined {
    ID: string;
    ActiveSince?: Date;
    KorisnikPrezimeIme?: string;
    PredmetID?: string;
    KorisnikID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const RasporedjivanjeInfo = createStructureInfo<EvidencijaPismena.Rasporedjivanje>(
    'EvidencijaPismena/Rasporedjivanje'
  );
  export interface Rasporedjivanje {
    ID: string;
    PredmetID: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    TemeljemPismena?: boolean;
    TemeljemGlavnogPredmeta?: boolean;
    KreiraoID: string;
    RasporedjenoNaID: string;
  }

  export const ValidForRasporedjivanjeInfo = createStructureInfo<
    EvidencijaPismena.ValidForRasporedjivanje
  >('EvidencijaPismena/ValidForRasporedjivanje');
  export interface ValidForRasporedjivanje {}

  export const PredmetRasporedjivanjeInfo = createStructureInfo<
    EvidencijaPismena.PredmetRasporedjivanje
  >('EvidencijaPismena/PredmetRasporedjivanje');
  export interface PredmetRasporedjivanje {
    Predmeti: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const UpsertPismenoRasporedjivanjeInfo = createStructureInfo<
    EvidencijaPismena.UpsertPismenoRasporedjivanje
  >('EvidencijaPismena/UpsertPismenoRasporedjivanje');
  export interface UpsertPismenoRasporedjivanje {
    Pismena: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const KatalogTijekaPostupanjaInfo = createStructureInfo<
    EvidencijaPismena.KatalogTijekaPostupanja
  >('EvidencijaPismena/KatalogTijekaPostupanja');
  export interface KatalogTijekaPostupanja {
    ID: string;
    Sifra?: number;
    Tekst: string;
    Opis?: string;
    StatusPredmetaID?: string;
  }

  export const VrstaPrilogaInfo = createStructureInfo<EvidencijaPismena.VrstaPriloga>(
    'EvidencijaPismena/VrstaPriloga'
  );
  export interface VrstaPriloga {
    ID: string;
    Naziv: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const VrstaPrilogaLookupInfo = createStructureInfo<EvidencijaPismena.VrstaPrilogaLookup>(
    'EvidencijaPismena/VrstaPrilogaLookup'
  );
  export interface VrstaPrilogaLookup {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const VrstaPrilogaBrowseInfo = createStructureInfo<EvidencijaPismena.VrstaPrilogaBrowse>(
    'EvidencijaPismena/VrstaPrilogaBrowse'
  );
  export interface VrstaPrilogaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const VrstaUpravnogPostupkaInfo = createStructureInfo<
    EvidencijaPismena.VrstaUpravnogPostupka
  >('EvidencijaPismena/VrstaUpravnogPostupka');
  export interface VrstaUpravnogPostupka {
    ID: string;
    Oznaka?: string;
    Naziv: string;
    DmsFolderName: string;
  }

  export const StanjePredmetaPrijeDogadjajaInfo = createStructureInfo<
    EvidencijaPismena.StanjePredmetaPrijeDogadjaja
  >('EvidencijaPismena/StanjePredmetaPrijeDogadjaja');
  export interface StanjePredmetaPrijeDogadjaja {
    ID: string;
    PrethodniStatusPredmetID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const PismenoTrenutniStatusInfo = createStructureInfo<
    EvidencijaPismena.PismenoTrenutniStatus
  >('EvidencijaPismena/PismenoTrenutniStatus');
  export interface PismenoTrenutniStatus {
    ID: string;
    Active?: boolean;
    DodatneOznake?: string;
    StatusPismenaID?: string;
    ZadnjiTppID?: string;
  }

  export const ComputePismenoStatusInfo = createStructureInfo<
    EvidencijaPismena.ComputePismenoStatus
  >('EvidencijaPismena/ComputePismenoStatus');
  export interface ComputePismenoStatus {
    ID: string;
    PredmetID?: string;
    StatusPismenaID?: string;
    Active?: boolean;
    DodatneOznake?: string;
    StupanjTajnostiID?: string;
    NivoStupnjaTajnosti?: number;
  }

  export const PrilogTrenutniStatusPismenaInfo = createStructureInfo<
    EvidencijaPismena.PrilogTrenutniStatusPismena
  >('EvidencijaPismena/PrilogTrenutniStatusPismena');
  export interface PrilogTrenutniStatusPismena {
    ID: string;
    StatusPismenaID?: string;
    ZadnjiTppID?: string;
  }

  export const PromjeniStatusPismenaInfo = createStructureInfo<
    EvidencijaPismena.PromjeniStatusPismena
  >('EvidencijaPismena/PromjeniStatusPismena');
  export interface PromjeniStatusPismena {
    ID: string;
    DatumVrijeme?: Date;
    PismenoID: string;
    Napomena?: string;
    StatusPismenaID: string;
    KorisnikID?: string;
  }

  export const DozvoljeniPrijelaziStatusaNotExistsInfo = createStructureInfo<
    EvidencijaPismena.DozvoljeniPrijelaziStatusaNotExists
  >('EvidencijaPismena/DozvoljeniPrijelaziStatusaNotExists');
  export interface DozvoljeniPrijelaziStatusaNotExists {}

  export const TrenutniKorisnikNemaGrupuZaStatusPismenaInfo = createStructureInfo<
    EvidencijaPismena.TrenutniKorisnikNemaGrupuZaStatusPismena
  >('EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusPismena');
  export interface TrenutniKorisnikNemaGrupuZaStatusPismena {}

  export const StatusPredmetaValidForPismenoEditInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaValidForPismenoEdit
  >('EvidencijaPismena/StatusPredmetaValidForPismenoEdit');
  export interface StatusPredmetaValidForPismenoEdit {}

  export const TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItemsInfo = createStructureInfo<
    EvidencijaPismena.TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItems
  >('EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItems');
  export interface TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItems {
    ID: string;
  }

  export const StatusPismenaInfo = createStructureInfo<EvidencijaPismena.StatusPismena>(
    'EvidencijaPismena/StatusPismena'
  );
  export interface StatusPismena {
    ID: string;
    Naziv: string;
    Active?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    IsUserEditable?: boolean;
    ValidForPismenoDelete?: boolean;
    ValidForPismenoUndoDelete?: boolean;
    ValidForPismenoEdit?: boolean;
    ValidForPromijeniTipPismena?: boolean;
    ValidForPrilogInsert?: boolean;
    ValidForPrilogEdit?: boolean;
    ValidForPrilogDelete?: boolean;
    ValidForDownload?: boolean;
    ValidForCheckout?: boolean;
    ValidForNewDocumentVersion?: boolean;
    ValidForPostaviStatusNaCheckoutanoPismeno?: boolean;
    ValidForZahtjevZaPotvrdomPrimitkaDostavaURad?: boolean;
    ValidForObradaPismenaInsert?: boolean;
    ValidForRezultatObradaPismena?: boolean;
    ValidForOtpremanje?: boolean;
    ValidForDostavaObavljena?: boolean;
    ValidForKreirajUputuOtpreme?: boolean;
  }

  export const ActiveOnlyInfo = createStructureInfo<EvidencijaPismena.ActiveOnly>(
    'EvidencijaPismena/ActiveOnly'
  );
  export interface ActiveOnly {}

  export const ValidForPromjeniStatusPismenaFilterInfo = createStructureInfo<
    EvidencijaPismena.ValidForPromjeniStatusPismenaFilter
  >('EvidencijaPismena/ValidForPromjeniStatusPismenaFilter');
  export interface ValidForPromjeniStatusPismenaFilter {}

  export const CanSelectForPromjeniStatusPismenaFilterInfo = createStructureInfo<
    EvidencijaPismena.CanSelectForPromjeniStatusPismenaFilter
  >('EvidencijaPismena/CanSelectForPromjeniStatusPismenaFilter');
  export interface CanSelectForPromjeniStatusPismenaFilter {
    PismenoID?: string;
  }

  export const OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilterInfo = createStructureInfo<
    EvidencijaPismena.OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilter
  >('EvidencijaPismena/OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilter');
  export interface OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilter {
    PrethodniStatusID?: string;
  }

  export const StatusPismenaKorisnickaGrupaZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaKorisnickaGrupaZaposlenik
  >('EvidencijaPismena/StatusPismenaKorisnickaGrupaZaposlenik');
  export interface StatusPismenaKorisnickaGrupaZaposlenik {
    ID: string;
    ZaposlenikID?: string;
    HasKorisnickaGrupa?: boolean;
    IsValid?: boolean;
  }

  export const StatusPismenaBrowseBaseInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaBrowseBase
  >('EvidencijaPismena/StatusPismenaBrowseBase');
  export interface StatusPismenaBrowseBase {
    ID: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPismenaBrowseInfo = createStructureInfo<EvidencijaPismena.StatusPismenaBrowse>(
    'EvidencijaPismena/StatusPismenaBrowse'
  );
  export interface StatusPismenaBrowse {
    ID: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPismenaDozvoljeniPrijelaziInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaDozvoljeniPrijelazi
  >('EvidencijaPismena/StatusPismenaDozvoljeniPrijelazi');
  export interface StatusPismenaDozvoljeniPrijelazi {
    ID: string;
    PrethodniStatusID: string;
    SljedeciStatusID: string;
  }

  export const StatusPismenaDozvoljeniPrijelaziBrowseBaseInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaDozvoljeniPrijelaziBrowseBase
  >('EvidencijaPismena/StatusPismenaDozvoljeniPrijelaziBrowseBase');
  export interface StatusPismenaDozvoljeniPrijelaziBrowseBase {
    ID: string;
    PrethodniStatusID?: string;
    SljedeciStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPismena?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const StatusPismenaDozvoljeniPrijelaziBrowseInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaDozvoljeniPrijelaziBrowse
  >('EvidencijaPismena/StatusPismenaDozvoljeniPrijelaziBrowse');
  export interface StatusPismenaDozvoljeniPrijelaziBrowse {
    ID: string;
    PrethodniStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusID?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPismena?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const StatusPismenaKorisnickaGrupaInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaKorisnickaGrupa
  >('EvidencijaPismena/StatusPismenaKorisnickaGrupa');
  export interface StatusPismenaKorisnickaGrupa {
    ID: string;
    StatusPismenaID: string;
    KorisnickaGrupaID: string;
  }

  export const StatusPismenaKorisnickaGrupaBrowseInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaKorisnickaGrupaBrowse
  >('EvidencijaPismena/StatusPismenaKorisnickaGrupaBrowse');
  export interface StatusPismenaKorisnickaGrupaBrowse {
    ID: string;
    StatusPismenaID?: string;
    KorisnickaGrupaNaziv?: string;
  }

  export const StatusPismenaPrijeDogadjajaInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaPrijeDogadjaja
  >('EvidencijaPismena/StatusPismenaPrijeDogadjaja');
  export interface StatusPismenaPrijeDogadjaja {
    ID: string;
    PrethodniStatusPismenoID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const StatusPismenaZaDogadajInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaZaDogadaj
  >('EvidencijaPismena/StatusPismenaZaDogadaj');
  export interface StatusPismenaZaDogadaj {
    ID: string;
    PismenoID?: string;
    Status?: string;
    Primjedba?: string;
    Datum?: Date;
    KorisnikID?: string;
  }

  export const StatusPredmetaInfo = createStructureInfo<EvidencijaPismena.StatusPredmeta>(
    'EvidencijaPismena/StatusPredmeta'
  );
  export interface StatusPredmeta {
    ID: string;
    Naziv: string;
    Sifra?: number;
    Active?: boolean;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    ValidForRasporedjivanje?: boolean;
    ValidForVezivanje?: boolean;
    ValidForVezivanjeGlavniPredmet?: boolean;
    ValidForPonistavanjeVezivanjaGlavniPredmet?: boolean;
    ValidForPredmetEdit?: boolean;
    ValidForPredmetDelete?: boolean;
    ValidForPismenoInsert?: boolean;
    ValidForPismenoEdit?: boolean;
    ValidForPismenoDelete?: boolean;
    ValidForPismenoUndoDelete?: boolean;
    ValidForPrilogInsert?: boolean;
    ValidForPrilogEdit?: boolean;
    ValidForPrilogDelete?: boolean;
    InvalidForCheckout?: boolean;
    InvalidForNewDocumentVersion?: boolean;
    ValidForDodjelaURad?: boolean;
    ValidForDostavaDrugomTijelu?: boolean;
    ValidForUstupanje?: boolean;
    ValidForZahtjevZaPotvrdomPrimitkaDostavaURad?: boolean;
    ValidForOdlaganjeUAdActa?: boolean;
    ValidForOdlaganjeURokovnik?: boolean;
    ValidForVracanjeURadIzRokovnika?: boolean;
    ValidForVracanjeURadIzAdActa?: boolean;
    ValidForDijeljenjePismenaPredmeta?: boolean;
    ValidForPonistavanjeDijeljenjaPismenaPredmeta?: boolean;
    ValidForObradaPismenaInsert?: boolean;
    ValidForRezultatObradaPismena?: boolean;
    ValidForKreirajUputuOtpreme?: boolean;
  }

  export const OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilterInfo = createStructureInfo<
    EvidencijaPismena.OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilter
  >('EvidencijaPismena/OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilter');
  export interface OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilter {
    PrethodniStatusID?: string;
  }

  export const CanSelectForPromjeniStatusPredmetaFilterInfo = createStructureInfo<
    EvidencijaPismena.CanSelectForPromjeniStatusPredmetaFilter
  >('EvidencijaPismena/CanSelectForPromjeniStatusPredmetaFilter');
  export interface CanSelectForPromjeniStatusPredmetaFilter {
    PredmetID?: string;
  }

  export const ValidForPromjeniStatusPredmetaFilterInfo = createStructureInfo<
    EvidencijaPismena.ValidForPromjeniStatusPredmetaFilter
  >('EvidencijaPismena/ValidForPromjeniStatusPredmetaFilter');
  export interface ValidForPromjeniStatusPredmetaFilter {}

  export const StatusPredmetaBrowseBaseInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaBrowseBase
  >('EvidencijaPismena/StatusPredmetaBrowseBase');
  export interface StatusPredmetaBrowseBase {
    ID: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    TipoviPredmeta?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPredmetaBrowseInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaBrowse
  >('EvidencijaPismena/StatusPredmetaBrowse');
  export interface StatusPredmetaBrowse {
    ID: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    TipoviPredmeta?: string;
    KorisnickeGrupe?: string;
  }

  export const KorisnickaGrupaStatusPredmetaZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.KorisnickaGrupaStatusPredmetaZaposlenik
  >('EvidencijaPismena/KorisnickaGrupaStatusPredmetaZaposlenik');
  export interface KorisnickaGrupaStatusPredmetaZaposlenik {
    ID: string;
    ZaposlenikID?: string;
    HasKorisnickaGrupa?: boolean;
    IsValid?: boolean;
  }

  export const UpsertStatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.UpsertStatusPredmeta
  >('EvidencijaPismena/UpsertStatusPredmeta');
  export interface UpsertStatusPredmeta {
    InsertStatusPredmeta?: boolean;
    StatusPredmetaJson?: string;
    GrupaIDsJson?: string;
  }

  export const StatusPredmetaTipPredmetaInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaTipPredmeta
  >('EvidencijaPismena/StatusPredmetaTipPredmeta');
  export interface StatusPredmetaTipPredmeta {
    ID: string;
    StatusPredmetaID: string;
    TipPredmetaID: string;
  }

  export const StatusPredmetaTipPredmetaBrowseInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaTipPredmetaBrowse
  >('EvidencijaPismena/StatusPredmetaTipPredmetaBrowse');
  export interface StatusPredmetaTipPredmetaBrowse {
    ID: string;
    StatusPredmetaID?: string;
    TipPredmetaNaziv?: string;
  }

  export const DozvoljeniPrijelaziStatusaInfo = createStructureInfo<
    EvidencijaPismena.DozvoljeniPrijelaziStatusa
  >('EvidencijaPismena/DozvoljeniPrijelaziStatusa');
  export interface DozvoljeniPrijelaziStatusa {
    ID: string;
    PrethodniStatusID: string;
    SljedeciStatusID: string;
  }

  export const DozvoljeniPrijelaziStatusaBrowseBaseInfo = createStructureInfo<
    EvidencijaPismena.DozvoljeniPrijelaziStatusaBrowseBase
  >('EvidencijaPismena/DozvoljeniPrijelaziStatusaBrowseBase');
  export interface DozvoljeniPrijelaziStatusaBrowseBase {
    ID: string;
    PrethodniStatusID?: string;
    SljedeciStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPredmeta?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const DozvoljeniPrijelaziStatusaBrowseInfo = createStructureInfo<
    EvidencijaPismena.DozvoljeniPrijelaziStatusaBrowse
  >('EvidencijaPismena/DozvoljeniPrijelaziStatusaBrowse');
  export interface DozvoljeniPrijelaziStatusaBrowse {
    ID: string;
    PrethodniStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusID?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPredmeta?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const KorisnickaGrupaStatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.KorisnickaGrupaStatusPredmeta
  >('EvidencijaPismena/KorisnickaGrupaStatusPredmeta');
  export interface KorisnickaGrupaStatusPredmeta {
    ID: string;
    StatusPredmetaID: string;
    KorisnickaGrupaID: string;
  }

  export const KorisnickaGrupaStatusPredmetaBrowseInfo = createStructureInfo<
    EvidencijaPismena.KorisnickaGrupaStatusPredmetaBrowse
  >('EvidencijaPismena/KorisnickaGrupaStatusPredmetaBrowse');
  export interface KorisnickaGrupaStatusPredmetaBrowse {
    ID: string;
    StatusPredmetaID?: string;
    KorisnickaGrupaNaziv?: string;
  }

  export const PromjeniStatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.PromjeniStatusPredmeta
  >('EvidencijaPismena/PromjeniStatusPredmeta');
  export interface PromjeniStatusPredmeta {
    ID: string;
    DatumVrijeme?: Date;
    PredmetID: string;
    StatusPredmetaID: string;
    Napomena?: string;
    KorisnikID?: string;
  }

  export const TrenutniKorisnikNemaGrupuZaStatusInfo = createStructureInfo<
    EvidencijaPismena.TrenutniKorisnikNemaGrupuZaStatus
  >('EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatus');
  export interface TrenutniKorisnikNemaGrupuZaStatus {}

  export const TrenutniKorisnikNemaGrupuZaStatusInvalidItemsInfo = createStructureInfo<
    EvidencijaPismena.TrenutniKorisnikNemaGrupuZaStatusInvalidItems
  >('EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusInvalidItems');
  export interface TrenutniKorisnikNemaGrupuZaStatusInvalidItems {
    ID: string;
  }

  export const StatusPredmetaGrupaInfo = createStructureInfo<EvidencijaPismena.StatusPredmetaGrupa>(
    'EvidencijaPismena/StatusPredmetaGrupa'
  );
  export interface StatusPredmetaGrupa {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const StatusPredmetaGrupaStatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaGrupaStatusPredmeta
  >('EvidencijaPismena/StatusPredmetaGrupaStatusPredmeta');
  export interface StatusPredmetaGrupaStatusPredmeta {
    ID: string;
    StatusID?: string;
    GrupaID?: string;
  }

  export const SetStatusPredmetaGrupaInfo = createStructureInfo<
    EvidencijaPismena.SetStatusPredmetaGrupa
  >('EvidencijaPismena/SetStatusPredmetaGrupa');
  export interface SetStatusPredmetaGrupa {
    StatusPredmetaID?: string;
    GrupaIDsJson?: string;
  }

  export const TijekPostupanjaPredmetInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmet
  >('EvidencijaPismena/TijekPostupanjaPredmet');
  export interface TijekPostupanjaPredmet {
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    StatusPredmetaID?: string;
    KorisnikID?: string;
    Subtype?: string;
    PismenoID?: string;
    PredmetOsnivanjeID?: string;
    PredmetBrisanjeID?: string;
    PredmetPromijeniTipID?: string;
    RasporedjivanjeID?: string;
    PromjeniStatusPredmetaID?: string;
    TijekPostupanjaPredmetBezStatusaID?: string;
    VezivanjeID?: string;
    DostavaURadDodjelaURadID?: string;
    DostavaURadDostavaDrugomTijeluID?: string;
    DostavaURadUstupanjePredmetaID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaID?: string;
    ObradaPismenaOdlaganjeUAdActaID?: string;
    ObradaPismenaOdlaganjeURokovnikID?: string;
    ObradaPismenaVracanjeURadIzAdActaID?: string;
    ObradaPismenaVracanjeURadIzRokovnikaID?: string;
    PovjerljiviUrudzbeniPredmetPromjenaStupnjaTajnostiID?: string;
    PismenoPredmetPovezivanjeEventVezaniPredmetID?: string;
    PismenoPredmetPovezivanjeEventGlavniPredmetID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventVezaniPredmetID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventGlavniPredmetID?: string;
    VezivanjeGlavniPredmetID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaBrisanjeSuradnikaID?: string;
  }

  export const TijekPostupanjaPredmet_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmet_Materialized
  >('EvidencijaPismena/TijekPostupanjaPredmet_Materialized');
  export interface TijekPostupanjaPredmet_Materialized {
    ID: string;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    DatumVrijeme?: Date;
    StatusPredmetaID?: string;
  }

  export const TijekPostupanjaPredmetStatusInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmetStatus
  >('EvidencijaPismena/TijekPostupanjaPredmetStatus');
  export interface TijekPostupanjaPredmetStatus {
    ID: string;
    StatusPredmetaID?: string;
  }

  export const TijekPostupanjaPredmetCombinedInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmetCombined
  >('EvidencijaPismena/TijekPostupanjaPredmetCombined');
  export interface TijekPostupanjaPredmetCombined {
    ID: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikPrezimeIme?: string;
    KorisnikID?: string;
  }

  export const TijekPostupanjaPredmetBrowseInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmetBrowse
  >('EvidencijaPismena/TijekPostupanjaPredmetBrowse');
  export interface TijekPostupanjaPredmetBrowse {
    ID: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikPrezimeIme?: string;
    KorisnikID?: string;
  }

  export const TijekPostupanjaPismenoInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPismeno
  >('EvidencijaPismena/TijekPostupanjaPismeno');
  export interface TijekPostupanjaPismeno {
    Opis?: string;
    DatumVrijeme?: Date;
    PismenoID?: string;
    KatalogTijekaPostupanjaID: string;
    StatusPismenaID?: string;
    KorisnikID: string;
    Subtype?: string;
    PismenaPromijeniTipID?: string;
    PismenoBrisanjeID?: string;
    PismenoPredmetPovezivanjeEventID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventID?: string;
    RasporedjivanjeID?: string;
    PromjeniStatusPismenaID?: string;
    VezivanjeID?: string;
    LightDMSDocumentVersionID?: string;
    CmisDmsDocumentVersionInfoID?: string;
    DostavaURadPotvrdaPrimitkaID?: string;
    DostavaURadVracanjeUPisarnicuID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaID?: string;
    ObradaPismenaPismenoObradaID?: string;
    ObradaPismenaPismenoObradaBrisanjeID?: string;
    ObradaPismenaRezultatObradePismenaID?: string;
    PovjerljiviUrudzbeniPismenoPromjenaStupnjaTajnostiID?: string;
    PismenoKreiranoPismenoID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaBrisanjeSuradnikaID?: string;
    Otprema2DostavaObavljenaTPP_MaterializedDostavaObavljenaTPPID?: string;
    Otprema2PonistavanjeDostaveTPP_MaterializedPonistavanjeDostaveTPPID?: string;
    Otprema2PosiljkaPonistenoZakljucivanjeTPP_MaterializedPosiljkaPonistenoZakljucivanjeTPPID?: string;
    Otprema2PosiljkaZakljucivanjeTPP_MaterializedPosiljkaZakljucivanjeTPPID?: string;
    Otprema2UputaZaOtpremuBrisanjeTPP_MaterializedUputaZaOtpremuBrisanjeTPPID?: string;
    Otprema2UputaZaOtpremuSadrzajInsertTPP_MaterializedComputeUputaZaOtpremuSadrzajInsertTPPID?: string;
    Otprema2UputaZaOtpremuPonistiBrisanjeTPP_MaterializedUputaZaOtpremuPonistiBrisanjeTPPID?: string;
    Otprema2UputaZaOtpremuSadrzajUpisTPP_MaterializedUputaZaOtpremuSadrzajUpisTPPID?: string;
  }

  export const TijekPostupanjaPismenoBrowseInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPismenoBrowse
  >('EvidencijaPismena/TijekPostupanjaPismenoBrowse');
  export interface TijekPostupanjaPismenoBrowse {
    ID: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PismenoID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikID?: string;
    KorisnikPrezimeIme?: string;
  }

  export const ZadnjiTijekPostupanjaInfo = createStructureInfo<
    EvidencijaPismena.ZadnjiTijekPostupanja
  >('EvidencijaPismena/ZadnjiTijekPostupanja');
  export interface ZadnjiTijekPostupanja {
    ID: string;
    TijekPostupanjaPredmetID?: string;
  }

  export const TijekPostupanjaPredmetBezStatusaInfo = createStructureInfo<
    EvidencijaPismena.TijekPostupanjaPredmetBezStatusa
  >('EvidencijaPismena/TijekPostupanjaPredmetBezStatusa');
  export interface TijekPostupanjaPredmetBezStatusa {
    ID: string;
    Opis: string;
    DatumVrijeme?: Date;
    PredmetID: string;
    KorisnikID?: string;
    StatusPredmetaID?: string;
    KatalogTijekaPostupanjaID?: string;
  }

  export const TipPismenaInfo = createStructureInfo<EvidencijaPismena.TipPismena>(
    'EvidencijaPismena/TipPismena'
  );
  export interface TipPismena {
    ID: string;
    Naziv: string;
    CtxId?: number;
    IsPrigovor?: boolean;
    IsZahtjevZaPotvrdu?: boolean;
    Active?: boolean;
  }

  export const IsPredefiniraniTipPismenaDeleteInfo = createStructureInfo<
    EvidencijaPismena.IsPredefiniraniTipPismenaDelete
  >('EvidencijaPismena/IsPredefiniraniTipPismenaDelete');
  export interface IsPredefiniraniTipPismenaDelete {}

  export const TipPismenaLoopupInfo = createStructureInfo<EvidencijaPismena.TipPismenaLoopup>(
    'EvidencijaPismena/TipPismenaLoopup'
  );
  export interface TipPismenaLoopup {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    IsPrigovor?: boolean;
    IsZahtjevZaPotvrdu?: boolean;
    IsPredefiniraniTip?: boolean;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
    TipoviPredmeta?: string;
  }

  export const TipPismenaLoopupFilterInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaLoopupFilter
  >('EvidencijaPismena/TipPismenaLoopupFilter');
  export interface TipPismenaLoopupFilter {
    DosjeID?: string;
    VrstaUpravnogPostupkaID?: string;
    UstrojstvenaJedinicaID?: string;
    TipPredmetaID?: string;
  }

  export const TipPismenaLoopupPredmetFilterInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaLoopupPredmetFilter
  >('EvidencijaPismena/TipPismenaLoopupPredmetFilter');
  export interface TipPismenaLoopupPredmetFilter {
    PredmetID?: string;
  }

  export const TipPismenaBrowseInfo = createStructureInfo<EvidencijaPismena.TipPismenaBrowse>(
    'EvidencijaPismena/TipPismenaBrowse'
  );
  export interface TipPismenaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    TipoviPredmeta?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const TipPismenaExtendedInfo = createStructureInfo<EvidencijaPismena.TipPismenaExtended>(
    'EvidencijaPismena/TipPismenaExtended'
  );
  export interface TipPismenaExtended {
    ID: string;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
    TipoviPredmeta?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const PredefiniraniTipPismenaInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPismena
  >('EvidencijaPismena/PredefiniraniTipPismena');
  export interface PredefiniraniTipPismena {
    ID: string;
    ActionDate?: Date;
    TipPismenaID: string;
    ActionType?: boolean;
    ExecutedByID?: string;
  }

  export const PredefiniraniTipPismenaHasFiltersInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPismenaHasFilters
  >('EvidencijaPismena/PredefiniraniTipPismenaHasFilters');
  export interface PredefiniraniTipPismenaHasFilters {}

  export const NeaktivanTipPismenaInfo = createStructureInfo<EvidencijaPismena.NeaktivanTipPismena>(
    'EvidencijaPismena/NeaktivanTipPismena'
  );
  export interface NeaktivanTipPismena {}

  export const TipPismenaKlasifikacijskeOznakeInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaKlasifikacijskeOznake
  >('EvidencijaPismena/TipPismenaKlasifikacijskeOznake');
  export interface TipPismenaKlasifikacijskeOznake {
    ID: string;
    FiksniDioKlaseID?: string;
    TipPismenaID: string;
  }

  export const TipPismenaKlasifikacijskeOznakeExtendedInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaKlasifikacijskeOznakeExtended
  >('EvidencijaPismena/TipPismenaKlasifikacijskeOznakeExtended');
  export interface TipPismenaKlasifikacijskeOznakeExtended {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const TipPismenaKlasifikacijskeOznakeBrowseInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaKlasifikacijskeOznakeBrowse
  >('EvidencijaPismena/TipPismenaKlasifikacijskeOznakeBrowse');
  export interface TipPismenaKlasifikacijskeOznakeBrowse {
    ID: string;
    TipPismenaID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPismenaUstrojstveneJediniceInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaUstrojstveneJedinice
  >('EvidencijaPismena/TipPismenaUstrojstveneJedinice');
  export interface TipPismenaUstrojstveneJedinice {
    ID: string;
    TipPismenaID: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPismenaUstrojstveneJediniceExtendedInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaUstrojstveneJediniceExtended
  >('EvidencijaPismena/TipPismenaUstrojstveneJediniceExtended');
  export interface TipPismenaUstrojstveneJediniceExtended {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPismenaUstrojstveneJediniceBrowseInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaUstrojstveneJediniceBrowse
  >('EvidencijaPismena/TipPismenaUstrojstveneJediniceBrowse');
  export interface TipPismenaUstrojstveneJediniceBrowse {
    ID: string;
    TipPismenaID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPismenaTipoviPredmetaInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaTipoviPredmeta
  >('EvidencijaPismena/TipPismenaTipoviPredmeta');
  export interface TipPismenaTipoviPredmeta {
    ID: string;
    TipPismenaID: string;
    TipPredmetaID?: string;
  }

  export const TipPismenaTipoviPredmetaExtendedInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaTipoviPredmetaExtended
  >('EvidencijaPismena/TipPismenaTipoviPredmetaExtended');
  export interface TipPismenaTipoviPredmetaExtended {
    ID: string;
    TipPredmetaNaziv?: string;
  }

  export const TipPismenaTipoviPredmetaBrowseInfo = createStructureInfo<
    EvidencijaPismena.TipPismenaTipoviPredmetaBrowse
  >('EvidencijaPismena/TipPismenaTipoviPredmetaBrowse');
  export interface TipPismenaTipoviPredmetaBrowse {
    ID: string;
    TipPismenaID?: string;
    Naziv?: string;
  }

  export const TipPredmetaInfo = createStructureInfo<EvidencijaPismena.TipPredmeta>(
    'EvidencijaPismena/TipPredmeta'
  );
  export interface TipPredmeta {
    ID: string;
    Naziv: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const TipPredmetaLoopupInfo = createStructureInfo<EvidencijaPismena.TipPredmetaLoopup>(
    'EvidencijaPismena/TipPredmetaLoopup'
  );
  export interface TipPredmetaLoopup {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    IsPredefiniraniTip?: boolean;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
  }

  export const IsPredefiniraniTipPredmetaDeleteInfo = createStructureInfo<
    EvidencijaPismena.IsPredefiniraniTipPredmetaDelete
  >('EvidencijaPismena/IsPredefiniraniTipPredmetaDelete');
  export interface IsPredefiniraniTipPredmetaDelete {}

  export const NedodijeljeniTipoviPredmetaInfo = createStructureInfo<
    EvidencijaPismena.NedodijeljeniTipoviPredmeta
  >('EvidencijaPismena/NedodijeljeniTipoviPredmeta');
  export interface NedodijeljeniTipoviPredmeta {
    StatusPredmetaID?: string;
  }

  export const TipPredmetaLoopupFilterInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaLoopupFilter
  >('EvidencijaPismena/TipPredmetaLoopupFilter');
  export interface TipPredmetaLoopupFilter {
    VrstaUpravnogPostupkaID?: string;
    DosjeID?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPredmetaBrowseInfo = createStructureInfo<EvidencijaPismena.TipPredmetaBrowse>(
    'EvidencijaPismena/TipPredmetaBrowse'
  );
  export interface TipPredmetaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const TipPredmetaExtendedInfo = createStructureInfo<EvidencijaPismena.TipPredmetaExtended>(
    'EvidencijaPismena/TipPredmetaExtended'
  );
  export interface TipPredmetaExtended {
    ID: string;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const PredefiniraniTipPredmetaInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPredmeta
  >('EvidencijaPismena/PredefiniraniTipPredmeta');
  export interface PredefiniraniTipPredmeta {
    ID: string;
    ActionDate?: Date;
    TipPredmetaID: string;
    ActionType?: boolean;
    ExecutedByID?: string;
  }

  export const PredefiniraniTipPredmetaHasFiltersInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPredmetaHasFilters
  >('EvidencijaPismena/PredefiniraniTipPredmetaHasFilters');
  export interface PredefiniraniTipPredmetaHasFilters {}

  export const NeaktivanTipPredmetaInfo = createStructureInfo<
    EvidencijaPismena.NeaktivanTipPredmeta
  >('EvidencijaPismena/NeaktivanTipPredmeta');
  export interface NeaktivanTipPredmeta {}

  export const TipPredmetaKlasifikacijskeOznakeInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaKlasifikacijskeOznake
  >('EvidencijaPismena/TipPredmetaKlasifikacijskeOznake');
  export interface TipPredmetaKlasifikacijskeOznake {
    ID: string;
    FiksniDioKlaseID?: string;
    TipPredmetaID: string;
  }

  export const TipPredmetaKlasifikacijskeOznakeExtendedInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaKlasifikacijskeOznakeExtended
  >('EvidencijaPismena/TipPredmetaKlasifikacijskeOznakeExtended');
  export interface TipPredmetaKlasifikacijskeOznakeExtended {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const TipPredmetaKlasifikacijskeOznakeBrowseInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaKlasifikacijskeOznakeBrowse
  >('EvidencijaPismena/TipPredmetaKlasifikacijskeOznakeBrowse');
  export interface TipPredmetaKlasifikacijskeOznakeBrowse {
    ID: string;
    TipPredmetaID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPredmetaUstrojstveneJediniceInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaUstrojstveneJedinice
  >('EvidencijaPismena/TipPredmetaUstrojstveneJedinice');
  export interface TipPredmetaUstrojstveneJedinice {
    ID: string;
    TipPredmetaID: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPredmetaUstrojstveneJediniceExtendedInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaUstrojstveneJediniceExtended
  >('EvidencijaPismena/TipPredmetaUstrojstveneJediniceExtended');
  export interface TipPredmetaUstrojstveneJediniceExtended {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPredmetaUstrojstveneJediniceBrowseInfo = createStructureInfo<
    EvidencijaPismena.TipPredmetaUstrojstveneJediniceBrowse
  >('EvidencijaPismena/TipPredmetaUstrojstveneJediniceBrowse');
  export interface TipPredmetaUstrojstveneJediniceBrowse {
    ID: string;
    TipPredmetaID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TrenutnoStanjePredmetaInfo = createStructureInfo<
    EvidencijaPismena.TrenutnoStanjePredmeta
  >('EvidencijaPismena/TrenutnoStanjePredmeta');
  export interface TrenutnoStanjePredmeta {
    ID: string;
    ZadnjiTppID?: string;
    StatusPredmetaID?: string;
  }

  export const UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontaktInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontakt
  >('EvidencijaPismena/UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontakt');
  export interface UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontakt {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const LookupSearchInfo = createStructureInfo<EvidencijaPismena.LookupSearch>(
    'EvidencijaPismena/LookupSearch'
  );
  export interface LookupSearch {
    Pattern?: string;
    PageSize?: number;
    SortProperty?: string;
  }

  export const ReferenceNonexistentStvarateljWithRadnoTijeloInfo = createStructureInfo<
    EvidencijaPismena.ReferenceNonexistentStvarateljWithRadnoTijelo
  >('EvidencijaPismena/ReferenceNonexistentStvarateljWithRadnoTijelo');
  export interface ReferenceNonexistentStvarateljWithRadnoTijelo {}

  export const RadnoTijeloCurrentExtendedInfo = createStructureInfo<
    EvidencijaPismena.RadnoTijeloCurrentExtended
  >('EvidencijaPismena/RadnoTijeloCurrentExtended');
  export interface RadnoTijeloCurrentExtended {
    ID: string;
    Naziv?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const ZaposlenikCurrentExtendedInfo = createStructureInfo<
    EvidencijaPismena.ZaposlenikCurrentExtended
  >('EvidencijaPismena/ZaposlenikCurrentExtended');
  export interface ZaposlenikCurrentExtended {
    ID: string;
    Prezime?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const UstrojstvenaJedinicaCurrentExtendedInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaCurrentExtended
  >('EvidencijaPismena/UstrojstvenaJedinicaCurrentExtended');
  export interface UstrojstvenaJedinicaCurrentExtended {
    ID: string;
    Naziv?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const VezivanjeInfo = createStructureInfo<EvidencijaPismena.Vezivanje>(
    'EvidencijaPismena/Vezivanje'
  );
  export interface Vezivanje {
    ID: string;
    PredmetID: string;
    PismenoID?: string;
    GlavniPredmetID: string;
    DatumKreiranja?: Date;
    TemeljemPismena?: boolean;
    PonistavanjeVezanja?: boolean;
    GrupnoVezivanjeID?: string;
    KreiraoID: string;
  }

  export const ValidForVezivanjeInfo = createStructureInfo<EvidencijaPismena.ValidForVezivanje>(
    'EvidencijaPismena/ValidForVezivanje'
  );
  export interface ValidForVezivanje {}

  export const ValidForVezivanjeGlavniPredmetInfo = createStructureInfo<
    EvidencijaPismena.ValidForVezivanjeGlavniPredmet
  >('EvidencijaPismena/ValidForVezivanjeGlavniPredmet');
  export interface ValidForVezivanjeGlavniPredmet {}

  export const ValidForPonistavanjeVezivanjaGlavniPredmetInfo = createStructureInfo<
    EvidencijaPismena.ValidForPonistavanjeVezivanjaGlavniPredmet
  >('EvidencijaPismena/ValidForPonistavanjeVezivanjaGlavniPredmet');
  export interface ValidForPonistavanjeVezivanjaGlavniPredmet {}

  export const UpsertPredmetVezivanjeInfo = createStructureInfo<
    EvidencijaPismena.UpsertPredmetVezivanje
  >('EvidencijaPismena/UpsertPredmetVezivanje');
  export interface UpsertPredmetVezivanje {
    PredmetID: string;
    GlavniPredmetID: string;
    VezivanjeID?: string;
    GrupnoVezivanjeID?: string;
  }

  export const ExcludePredmetsInfo = createStructureInfo<EvidencijaPismena.ExcludePredmets>(
    'EvidencijaPismena/ExcludePredmets'
  );
  export interface ExcludePredmets {
    PredmetIDsToExclude?: string;
  }

  export const GetVezaniPredmetiInfo = createStructureInfo<EvidencijaPismena.GetVezaniPredmeti>(
    'EvidencijaPismena/GetVezaniPredmeti'
  );
  export interface GetVezaniPredmeti {
    PredmetID?: string;
  }

  export const UpsertPredmetPonistiVezivanjeInfo = createStructureInfo<
    EvidencijaPismena.UpsertPredmetPonistiVezivanje
  >('EvidencijaPismena/UpsertPredmetPonistiVezivanje');
  export interface UpsertPredmetPonistiVezivanje {
    PredmetID: string;
    VezivanjeID?: string;
    GrupnoVezivanjeID?: string;
  }

  export const UpsertPismenoVezivanjePredmetInfo = createStructureInfo<
    EvidencijaPismena.UpsertPismenoVezivanjePredmet
  >('EvidencijaPismena/UpsertPismenoVezivanjePredmet');
  export interface UpsertPismenoVezivanjePredmet {
    PismenoID: string;
    PredmetID: string;
  }

  export const UpsertPismenoPonistiVezivanjePredmetInfo = createStructureInfo<
    EvidencijaPismena.UpsertPismenoPonistiVezivanjePredmet
  >('EvidencijaPismena/UpsertPismenoPonistiVezivanjePredmet');
  export interface UpsertPismenoPonistiVezivanjePredmet {
    PismenoID: string;
  }

  export const VezivanjeKaoPromjenaNadleznostiInfo = createStructureInfo<
    EvidencijaPismena.VezivanjeKaoPromjenaNadleznosti
  >('EvidencijaPismena/VezivanjeKaoPromjenaNadleznosti');
  export interface VezivanjeKaoPromjenaNadleznosti {
    ID: string;
    GlavniUNadleznostiID?: string;
  }

  export const VezivanjeKaoPromjenaNadleznosti_MaterializedInfo = createStructureInfo<
    EvidencijaPismena.VezivanjeKaoPromjenaNadleznosti_Materialized
  >('EvidencijaPismena/VezivanjeKaoPromjenaNadleznosti_Materialized');
  export interface VezivanjeKaoPromjenaNadleznosti_Materialized {
    ID: string;
    GlavniUNadleznostiID?: string;
  }

  export const PredmetiPlusVezeNaGlavniInfo = createStructureInfo<
    EvidencijaPismena.PredmetiPlusVezeNaGlavni
  >('EvidencijaPismena/PredmetiPlusVezeNaGlavni');
  export interface PredmetiPlusVezeNaGlavni {
    ID: string;
    PredmetID?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    PodaciSPredmetaID?: string;
  }

  export const VezaniPredmetiInfo = createStructureInfo<EvidencijaPismena.VezaniPredmeti>(
    'EvidencijaPismena/VezaniPredmeti'
  );
  export interface VezaniPredmeti {
    ID: string;
    GlavniPredmetID?: string;
    GlavniPredmetKlasifikacijskaOznaka?: string;
  }

  export const PredmetCustomFieldsSearchInfo = createStructureInfo<
    EvidencijaPismena.PredmetCustomFieldsSearch
  >('EvidencijaPismena/PredmetCustomFieldsSearch');
  export interface PredmetCustomFieldsSearch {}

  export const PismenoCustomFieldsSearchInfo = createStructureInfo<
    EvidencijaPismena.PismenoCustomFieldsSearch
  >('EvidencijaPismena/PismenoCustomFieldsSearch');
  export interface PismenoCustomFieldsSearch {}

  export const DocumentTemplatePismenoCTXInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePismenoCTX
  >('EvidencijaPismena/DocumentTemplatePismenoCTX');
  export interface DocumentTemplatePismenoCTX {
    ID: string;
    CTXPismenoBarkod?: string;
  }

  export const DocumentTemplatePrilogCTXInfo = createStructureInfo<
    EvidencijaPismena.DocumentTemplatePrilogCTX
  >('EvidencijaPismena/DocumentTemplatePrilogCTX');
  export interface DocumentTemplatePrilogCTX {
    ID: string;
    CTXPrilogBarkod?: string;
  }

  export const CtxPrilogPismenoInfo = createStructureInfo<EvidencijaPismena.CtxPrilogPismeno>(
    'EvidencijaPismena/CtxPrilogPismeno'
  );
  export interface CtxPrilogPismeno {
    ID: string;
    CtxId?: number;
  }

  export const ComputePismenoCTXFTSKljucneRijeciInfo = createStructureInfo<
    EvidencijaPismena.ComputePismenoCTXFTSKljucneRijeci
  >('EvidencijaPismena/ComputePismenoCTXFTSKljucneRijeci');
  export interface ComputePismenoCTXFTSKljucneRijeci {
    ID: string;
    CTXPismenoID?: string;
  }

  export const DokumentForConnectorInfo = createStructureInfo<
    EvidencijaPismena.DokumentForConnector
  >('EvidencijaPismena/DokumentForConnector');
  export interface DokumentForConnector {
    ID: string;
    PredmetId?: string;
    PredmetCtxId?: number;
    DokumentCtxId?: number;
    DatumNastanka?: Date;
    UrudzbeniBroj?: string;
    NazivDokumenta?: string;
    SubjektId?: string;
    VrstaDokumentaId?: string;
    VrstaDokumentaCtxId?: number;
    Vrijednost?: number;
    Prilog?: string;
    DjelatnikId?: string;
    DjelatnikCtxId?: number;
  }

  export const StatusPismenaForConnectorInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaForConnector
  >('EvidencijaPismena/StatusPismenaForConnector');
  export interface StatusPismenaForConnector {
    ID: string;
    PismenoId?: string;
    PismenoCtxId?: number;
    Status?: string;
    Primjedba?: string;
    Datum?: Date;
    KorisnikId?: string;
    KorisnikCtxId?: number;
  }

  export const AktivanPlanKlasifikacijskihOznakaForConnectorInfo = createStructureInfo<
    EvidencijaPismena.AktivanPlanKlasifikacijskihOznakaForConnector
  >('EvidencijaPismena/AktivanPlanKlasifikacijskihOznakaForConnector');
  export interface AktivanPlanKlasifikacijskihOznakaForConnector {
    ID: string;
    PlanKlasifikacijskihOznakaVrijediOd?: Date;
    PlanKlasifikacijskihOznakaVrijediDo?: Date;
    DjelatnostID?: string;
    DjelatnostVrijediOd?: Date;
    NazivDjelatnosti?: string;
    OznakaDjelatnosti?: string;
    DosjeID?: string;
    DosijeVrijediOd?: Date;
    NazivDosijea?: string;
    OznakaDosijea?: string;
    OznakaUpravnosti?: string;
    OblikFiksniDioKlaseUP?: string;
  }

  export const CtxPredmetInfo = createStructureInfo<EvidencijaPismena.CtxPredmet>(
    'EvidencijaPismena/CtxPredmet'
  );
  export interface CtxPredmet {
    ID: string;
    CtxId?: number;
  }

  export const ComputePredmetCTXFTSKljucneRijeciInfo = createStructureInfo<
    EvidencijaPismena.ComputePredmetCTXFTSKljucneRijeci
  >('EvidencijaPismena/ComputePredmetCTXFTSKljucneRijeci');
  export interface ComputePredmetCTXFTSKljucneRijeci {
    ID: string;
    CTXPredmetID?: string;
  }

  export const PredmetForConnectorInfo = createStructureInfo<EvidencijaPismena.PredmetForConnector>(
    'EvidencijaPismena/PredmetForConnector'
  );
  export interface PredmetForConnector {
    ID: string;
    PredmetId?: number;
    Klasa?: string;
    OrgJedinicaCtxId?: number;
    OrgJedinicaId?: string;
    ZaduzeniKorisnikCtxId?: number;
    ZaduzeniKorisnikId?: string;
    NazivPredmeta?: string;
    DatumOtvaranjaPredmeta?: Date;
    RjesavateljCtxId?: number;
    RjesavateljId?: string;
    VezaNaId?: string;
    VezaNaCtxId?: number;
    SubjektId?: string;
    SubjektEntityId?: string;
    SubjektCtxId?: number;
  }

  export const StatusPredmetaForConnectorInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaForConnector
  >('EvidencijaPismena/StatusPredmetaForConnector');
  export interface StatusPredmetaForConnector {
    ID: string;
    PredmetId?: string;
    Datum?: Date;
    Status?: string;
    Primjedba?: string;
    KorisnikId?: string;
    KorisnikCtxId?: number;
  }

  export const ComputePrilogCTXFTSKljucneRijeciInfo = createStructureInfo<
    EvidencijaPismena.ComputePrilogCTXFTSKljucneRijeci
  >('EvidencijaPismena/ComputePrilogCTXFTSKljucneRijeci');
  export interface ComputePrilogCTXFTSKljucneRijeci {
    ID: string;
    CTXPrilogID?: string;
  }

  export const PismenoCheckoutanoInfo = createStructureInfo<EvidencijaPismena.PismenoCheckoutano>(
    'EvidencijaPismena/PismenoCheckoutano'
  );
  export interface PismenoCheckoutano {}

  export const ValidForPostaviStatusNaCheckoutanoPismenoInfo = createStructureInfo<
    EvidencijaPismena.ValidForPostaviStatusNaCheckoutanoPismeno
  >('EvidencijaPismena/ValidForPostaviStatusNaCheckoutanoPismeno');
  export interface ValidForPostaviStatusNaCheckoutanoPismeno {}

  export const ValidateBrisanjePrilogDocumentCheckoutInfo = createStructureInfo<
    EvidencijaPismena.ValidateBrisanjePrilogDocumentCheckout
  >('EvidencijaPismena/ValidateBrisanjePrilogDocumentCheckout');
  export interface ValidateBrisanjePrilogDocumentCheckout {}

  export const PredmetForPismohranaConnectorInfo = createStructureInfo<
    EvidencijaPismena.PredmetForPismohranaConnector
  >('EvidencijaPismena/PredmetForPismohranaConnector');
  export interface PredmetForPismohranaConnector {
    ID: string;
    Klasa?: string;
    FiksniDioKlase?: string;
    NazivPredmeta?: string;
    DatumOtvaranjaPredmeta?: Date;
    NazivZadnjegStatusa?: string;
  }

  export const DostavaURadTrenutniSluzbenikIliUJFilterInfo = createStructureInfo<
    EvidencijaPismena.DostavaURadTrenutniSluzbenikIliUJFilter
  >('EvidencijaPismena/DostavaURadTrenutniSluzbenikIliUJFilter');
  export interface DostavaURadTrenutniSluzbenikIliUJFilter {
    TrenutniSluzbenikIliUJ?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustavaInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustava
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustava');
  export interface UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustava {}

  export const DosjeFiksniDioKlaseInfo = createStructureInfo<EvidencijaPismena.DosjeFiksniDioKlase>(
    'EvidencijaPismena/DosjeFiksniDioKlase'
  );
  export interface DosjeFiksniDioKlase {
    ID: string;
    FiksniDioKlase?: string;
  }

  export const ObradaPismenoExtendedInfo = createStructureInfo<
    EvidencijaPismena.ObradaPismenoExtended
  >('EvidencijaPismena/ObradaPismenoExtended');
  export interface ObradaPismenoExtended {
    ID: string;
    PredmetBrisan?: boolean;
    PredmetNijeBrisan?: boolean;
    PredmetVezan?: boolean;
    GlavniPredmet?: boolean;
    Brisano?: boolean;
    NijeBrisano?: boolean;
    SadrziPriloge?: boolean;
  }

  export const PismenoBrowseSearchInfo = createStructureInfo<EvidencijaPismena.PismenoBrowseSearch>(
    'EvidencijaPismena/PismenoBrowseSearch'
  );
  export interface PismenoBrowseSearch {
    Pattern?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    StatusPredmetaIDs?: string;
    StatusPismenaIDs?: string;
    UrudzbeniBroj?: string;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    LokacijeIDs?: string;
    PosiljateljStvaratelj?: string;
    PosiljateljKlasa?: string;
    PosiljateljUrBroj?: string;
    DodatneOznakeIDs?: string;
    Naziv?: string;
    Nadleznost?: string;
    SuradnikIDs?: string;
    TipPismenaIDs?: string;
    TipPredmetaIDs?: string;
    StupanjTajnostiIds?: string;
  }

  export const PredmetFilterStrankaForFtsInfo = createStructureInfo<
    EvidencijaPismena.PredmetFilterStrankaForFts
  >('EvidencijaPismena/PredmetFilterStrankaForFts');
  export interface PredmetFilterStrankaForFts {
    ID: string;
    PredmetID?: string;
    StrankaID?: string;
  }

  export const PredmetFilterNadleznostInfo = createStructureInfo<
    EvidencijaPismena.PredmetFilterNadleznost
  >('EvidencijaPismena/PredmetFilterNadleznost');
  export interface PredmetFilterNadleznost {
    ID: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const PredmetBrowseSearchInfo = createStructureInfo<EvidencijaPismena.PredmetBrowseSearch>(
    'EvidencijaPismena/PredmetBrowseSearch'
  );
  export interface PredmetBrowseSearch {
    Pattern?: string;
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    DatumStatusaOd?: Date;
    DatumStatusaDo?: Date;
    Nadleznost?: string;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    Stranka?: string;
    LokacijeIDs?: string;
    StatusPredmetaIDs?: string;
    Naziv?: string;
    TipPredmetaIDs?: string;
    Active?: boolean;
    CurrentUser?: string;
    SuradnikIDs?: string;
    StatusPostavio?: string;
    DodatneOznakeIDs?: string;
    StupanjTajnostiIds?: string;
  }

  export const RazvodjenjePredmetInfo = createStructureInfo<EvidencijaPismena.RazvodjenjePredmet>(
    'EvidencijaPismena/RazvodjenjePredmet'
  );
  export interface RazvodjenjePredmet {
    ID: string;
    DatumVrijeme?: Date;
    Razvodjenje?: string;
    KorisnikID?: string;
    PredmetID?: string;
    PismenoID?: string;
    OznakaRazvodjenja?: string;
  }

  export const PredmetRazvodjenjeBrowseInfo = createStructureInfo<
    EvidencijaPismena.PredmetRazvodjenjeBrowse
  >('EvidencijaPismena/PredmetRazvodjenjeBrowse');
  export interface PredmetRazvodjenjeBrowse {
    ID: string;
    PredmetID?: string;
    DatumVrijeme?: Date;
    Razvodjenje?: string;
    KorisnikPrezimeIme?: string;
  }

  export const PredmetZadnjeRazvodjenjeInfo = createStructureInfo<
    EvidencijaPismena.PredmetZadnjeRazvodjenje
  >('EvidencijaPismena/PredmetZadnjeRazvodjenje');
  export interface PredmetZadnjeRazvodjenje {
    ID: string;
    Razvodjenje?: string;
    ZadnjeRazvodjenjeID?: string;
  }

  export const PredmetZadnjeOdlaganjeInfo = createStructureInfo<
    EvidencijaPismena.PredmetZadnjeOdlaganje
  >('EvidencijaPismena/PredmetZadnjeOdlaganje');
  export interface PredmetZadnjeOdlaganje {
    ID: string;
    ZadnjeOdlaganjeRokCuvanja?: Date;
  }

  export const PismenoOcrFieldsSearchInfo = createStructureInfo<
    EvidencijaPismena.PismenoOcrFieldsSearch
  >('EvidencijaPismena/PismenoOcrFieldsSearch');
  export interface PismenoOcrFieldsSearch {
    Sadrzaj?: string;
  }

  export const DenyPredmetPermissionsPovjerljiviUrudzbeniInfo = createStructureInfo<
    EvidencijaPismena.DenyPredmetPermissionsPovjerljiviUrudzbeni
  >('EvidencijaPismena/DenyPredmetPermissionsPovjerljiviUrudzbeni');
  export interface DenyPredmetPermissionsPovjerljiviUrudzbeni {
    ID: string;
  }

  export const MaksimalniStupanjTajnostiPovezanihEntitetaInfo = createStructureInfo<
    EvidencijaPismena.MaksimalniStupanjTajnostiPovezanihEntiteta
  >('EvidencijaPismena/MaksimalniStupanjTajnostiPovezanihEntiteta');
  export interface MaksimalniStupanjTajnostiPovezanihEntiteta {
    ID: string;
    PredmetStupanjTajnostiNaziv?: string;
    PovezaniEntitetMaxStupanjTajnostiNaziv?: string;
    StupanjTajnostiJeManjiOdPredmeta?: boolean;
    MaxStupanjTajnostiPovezanihEntitetaID?: string;
  }

  export const PrilogStanjeInfo = createStructureInfo<EvidencijaPismena.PrilogStanje>(
    'EvidencijaPismena/PrilogStanje'
  );
  export interface PrilogStanje {
    ID: string;
    PrefiksKlaseStupnjaTajnosti?: string;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const PrilogStanjeComputedInfo = createStructureInfo<
    EvidencijaPismena.PrilogStanjeComputed
  >('EvidencijaPismena/PrilogStanjeComputed');
  export interface PrilogStanjeComputed {
    ID: string;
    NivoStupnjaTajnosti?: number;
    PrefiksKlaseStupnjaTajnosti?: string;
    StupanjTajnostiID?: string;
  }

  export const PovjerljiviUrudzbeniFilterInfo = createStructureInfo<
    EvidencijaPismena.PovjerljiviUrudzbeniFilter
  >('EvidencijaPismena/PovjerljiviUrudzbeniFilter');
  export interface PovjerljiviUrudzbeniFilter {
    StupanjTajnostiIds?: string;
  }

  export const RasporedjivanjeStupanjTajnostiValidationInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjeStupanjTajnostiValidation
  >('EvidencijaPismena/RasporedjivanjeStupanjTajnostiValidation');
  export interface RasporedjivanjeStupanjTajnostiValidation {
    ID: string;
    IsValid?: boolean;
  }

  export const RsLookupInfo = createStructureInfo<EvidencijaPismena.RsLookup>(
    'EvidencijaPismena/RsLookup'
  );
  export interface RsLookup {
    ID: string;
    Value?: string;
    Label?: string;
  }

  export const InternaDostavnaKnjiga_FilterByDatumUrudzbiranjaInfo = createStructureInfo<
    EvidencijaPismena.InternaDostavnaKnjiga_FilterByDatumUrudzbiranja
  >('EvidencijaPismena/InternaDostavnaKnjiga_FilterByDatumUrudzbiranja');
  export interface InternaDostavnaKnjiga_FilterByDatumUrudzbiranja {
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
  }

  export const UrudzbeniZapisnik_FilterByDatumUrudzbiranjaInfo = createStructureInfo<
    EvidencijaPismena.UrudzbeniZapisnik_FilterByDatumUrudzbiranja
  >('EvidencijaPismena/UrudzbeniZapisnik_FilterByDatumUrudzbiranja');
  export interface UrudzbeniZapisnik_FilterByDatumUrudzbiranja {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
  }

  export const PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatniciInfo = createStructureInfo<
    EvidencijaPismena.PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatnici
  >('EvidencijaPismena/PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatnici');
  export interface PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatnici {
    DatumZakljucivanjaOd?: Date;
    DatumZakljucivanjaDo?: Date;
    JeZakljuceno?: boolean;
  }

  export const PrijamnaKnjigaPosiljkeHP_KategorijaPosiljkeInfo = createStructureInfo<
    EvidencijaPismena.PrijamnaKnjigaPosiljkeHP_KategorijaPosiljke
  >('EvidencijaPismena/PrijamnaKnjigaPosiljkeHP_KategorijaPosiljke');
  export interface PrijamnaKnjigaPosiljkeHP_KategorijaPosiljke {}

  export const RS_PruzateljUslugeInfo = createStructureInfo<EvidencijaPismena.RS_PruzateljUsluge>(
    'EvidencijaPismena/RS_PruzateljUsluge'
  );
  export interface RS_PruzateljUsluge {}

  export const RS_Global_UserNameUpravnoTijeloInfo = createStructureInfo<
    EvidencijaPismena.RS_Global_UserNameUpravnoTijelo
  >('EvidencijaPismena/RS_Global_UserNameUpravnoTijelo');
  export interface RS_Global_UserNameUpravnoTijelo {
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const RS_PredmetReferenti_UserNameUpravnoTijeloInfo = createStructureInfo<
    EvidencijaPismena.RS_PredmetReferenti_UserNameUpravnoTijelo
  >('EvidencijaPismena/RS_PredmetReferenti_UserNameUpravnoTijelo');
  export interface RS_PredmetReferenti_UserNameUpravnoTijelo {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
  }

  export const RS_Global_UserNameUstrojstvenaJedinicaInfo = createStructureInfo<
    EvidencijaPismena.RS_Global_UserNameUstrojstvenaJedinica
  >('EvidencijaPismena/RS_Global_UserNameUstrojstvenaJedinica');
  export interface RS_Global_UserNameUstrojstvenaJedinica {
    DatumOd?: Date;
    DatumDo?: Date;
    PrikaziiNeaktivneUJ?: boolean;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
  }

  export const RS_PredmetReferenti_UserNameUstrojstvenaJedinicaInfo = createStructureInfo<
    EvidencijaPismena.RS_PredmetReferenti_UserNameUstrojstvenaJedinica
  >('EvidencijaPismena/RS_PredmetReferenti_UserNameUstrojstvenaJedinica');
  export interface RS_PredmetReferenti_UserNameUstrojstvenaJedinica {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    PrikaziiNeaktivneUJ?: boolean;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
  }

  export const RS_Global_LokacijaInfo = createStructureInfo<EvidencijaPismena.RS_Global_Lokacija>(
    'EvidencijaPismena/RS_Global_Lokacija'
  );
  export interface RS_Global_Lokacija {
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const RS_Global_UserNameZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.RS_Global_UserNameZaposlenik
  >('EvidencijaPismena/RS_Global_UserNameZaposlenik');
  export interface RS_Global_UserNameZaposlenik {
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
    SplitLokacijaIDs?: string;
    PrikaziiNeaktivneUJ?: boolean;
  }

  export const DjelatnikKojiJeZakljucioOtpremuInfo = createStructureInfo<
    EvidencijaPismena.DjelatnikKojiJeZakljucioOtpremu
  >('EvidencijaPismena/DjelatnikKojiJeZakljucioOtpremu');
  export interface DjelatnikKojiJeZakljucioOtpremu {
    KoristiDatumZakljucivanja?: boolean;
    UserName?: string;
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    LokacijaSluzbenikaID?: string;
  }

  export const DjelatnikKojiJeKreiraoPosiljkuInfo = createStructureInfo<
    EvidencijaPismena.DjelatnikKojiJeKreiraoPosiljku
  >('EvidencijaPismena/DjelatnikKojiJeKreiraoPosiljku');
  export interface DjelatnikKojiJeKreiraoPosiljku {
    KoristiDatumZakljucivanja?: boolean;
    UserName?: string;
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    LokacijaSluzbenikaID?: string;
  }

  export const Lokacija_AktivnaInfo = createStructureInfo<EvidencijaPismena.Lokacija_Aktivna>(
    'EvidencijaPismena/Lokacija_Aktivna'
  );
  export interface Lokacija_Aktivna {}

  export const RS_PredmetReferenti_UserNameZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.RS_PredmetReferenti_UserNameZaposlenik
  >('EvidencijaPismena/RS_PredmetReferenti_UserNameZaposlenik');
  export interface RS_PredmetReferenti_UserNameZaposlenik {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
    SplitLokacijaIDs?: string;
    PrikaziiNeaktivneUJ?: boolean;
  }

  export const RS_DostavnaKnjigaZaPostu_PrimateljPosiljkeInfo = createStructureInfo<
    EvidencijaPismena.RS_DostavnaKnjigaZaPostu_PrimateljPosiljke
  >('EvidencijaPismena/RS_DostavnaKnjigaZaPostu_PrimateljPosiljke');
  export interface RS_DostavnaKnjigaZaPostu_PrimateljPosiljke {
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    KoristiDatumZakljucivanja?: boolean;
    LokacijaSluzbenikaID?: string;
    SplitKreiraoID?: string;
  }

  export const RS_Global_VrstaPosiljkeInfo = createStructureInfo<
    EvidencijaPismena.RS_Global_VrstaPosiljke
  >('EvidencijaPismena/RS_Global_VrstaPosiljke');
  export interface RS_Global_VrstaPosiljke {}

  export const RsLookupStringValueInfo = createStructureInfo<EvidencijaPismena.RsLookupStringValue>(
    'EvidencijaPismena/RsLookupStringValue'
  );
  export interface RsLookupStringValue {
    ID: string;
    Value?: string;
    Label?: string;
  }

  export const RS_Global_VrstaUpravnogPostupkaInfo = createStructureInfo<
    EvidencijaPismena.RS_Global_VrstaUpravnogPostupka
  >('EvidencijaPismena/RS_Global_VrstaUpravnogPostupka');
  export interface RS_Global_VrstaUpravnogPostupka {}

  export const RS_PregledPredmeta_StatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.RS_PregledPredmeta_StatusPredmeta
  >('EvidencijaPismena/RS_PregledPredmeta_StatusPredmeta');
  export interface RS_PregledPredmeta_StatusPredmeta {
    ID: string;
    Value?: string;
    Label?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustavaInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustava
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustava');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustava {}

  export const UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItemaInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItema
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItema');
  export interface UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItema {
    ItemID?: string;
    TrenutnoOdabraniDatum?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilterInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilter
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilter');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilter {
    AtTime?: Date;
    Pattern?: string;
    IDs?: string;
    ActiveOnly?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvarateljInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvaratelj
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvaratelj');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvaratelj {
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrentInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrent
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrent');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrent {
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTimeInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTime
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTime');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTime {
    AtTime?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryComputedInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik_HistoryComputed
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryComputed');
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryComputed {
    ID: string;
    EntityID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    Naziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    UstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    IsZaposlenik?: boolean;
    RadomUpravljaID?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    BrOznakaNazivUstrojstvenaJedinicaNazivUSastavuNaziv?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikRpInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikRp
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikRp');
  export interface UstrojstvenaJedinicaIliZaposlenikRp {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenik
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik');
  export interface UstrojstvenaJedinicaIliZaposlenik {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActiveInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActive
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActive');
  export interface UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActive {}

  export const UstrojstvenaJedinicaIliZaposlenikIsActiveInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikIsActive
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsActive');
  export interface UstrojstvenaJedinicaIliZaposlenikIsActive {}

  export const UstrojstvenaJedinicaIliZaposlenikQuickSearchInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikQuickSearch
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikQuickSearch');
  export interface UstrojstvenaJedinicaIliZaposlenikQuickSearch {
    Pattern?: string;
  }

  export const SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikIDInfo = createStructureInfo<
    EvidencijaPismena.SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikID
  >('EvidencijaPismena/SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikID');
  export interface SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikID {
    Pattern?: string;
    SluzbenikID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIsZaposlenikInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikIsZaposlenik
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsZaposlenik');
  export interface UstrojstvenaJedinicaIliZaposlenikIsZaposlenik {}

  export const UstrojstvenaJedinicaIliZaposlenikStvarateljInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikStvaratelj
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikStvaratelj');
  export interface UstrojstvenaJedinicaIliZaposlenikStvaratelj {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    IsZaposlenik?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTimeInfo = createStructureInfo<
    EvidencijaPismena.UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTime
  >('EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTime');
  export interface UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTime {
    Pattern?: string;
  }

  export const TipoviPismenaZaPrigovoreInfo = createStructureInfo<
    EvidencijaPismena.TipoviPismenaZaPrigovore
  >('EvidencijaPismena/TipoviPismenaZaPrigovore');
  export interface TipoviPismenaZaPrigovore {
    PismenoID?: string;
  }

  export const TipoviPismenaZaZahtjeveZaPotvrduInfo = createStructureInfo<
    EvidencijaPismena.TipoviPismenaZaZahtjeveZaPotvrdu
  >('EvidencijaPismena/TipoviPismenaZaZahtjeveZaPotvrdu');
  export interface TipoviPismenaZaZahtjeveZaPotvrdu {
    PismenoID?: string;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesInfo = createStructureInfo<
    EvidencijaPismena.OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_Changes
  >('EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_Changes');
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    RazinaPovlacenjaBrojcaneOznake?: number;
    DodavnjeNulaDoBrojaZnamenki: number;
    PonovnoKoristenjeObrisanih: boolean;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_HistoryInfo = createStructureInfo<
    EvidencijaPismena.OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_History
  >('EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_History');
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    RazinaPovlacenjaBrojcaneOznake?: number;
    DodavnjeNulaDoBrojaZnamenki: number;
    PonovnoKoristenjeObrisanih: boolean;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
  }

  export const Predmet_ChangesInfo = createStructureInfo<EvidencijaPismena.Predmet_Changes>(
    'EvidencijaPismena/Predmet_Changes'
  );
  export interface Predmet_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    UNadleznostiID: string;
  }

  export const Predmet_HistoryInfo = createStructureInfo<EvidencijaPismena.Predmet_History>(
    'EvidencijaPismena/Predmet_History'
  );
  export interface Predmet_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    UNadleznostiID: string;
  }

  export const PlanKlasifikacijskihOznakaLookupInfo = createStructureInfo<
    EvidencijaPismena.PlanKlasifikacijskihOznakaLookup
  >('EvidencijaPismena/PlanKlasifikacijskihOznakaLookup');
  export interface PlanKlasifikacijskihOznakaLookup {
    ID: string;
    Naziv?: string;
    VrijediOd?: Date;
  }

  export const DjelatnostLookupInfo = createStructureInfo<EvidencijaPismena.DjelatnostLookup>(
    'EvidencijaPismena/DjelatnostLookup'
  );
  export interface DjelatnostLookup {
    ID: string;
    Oznaka?: string;
    Naziv?: string;
  }

  export const ZalbaPoDrugostupanjskomTijeluLookupInfo = createStructureInfo<
    EvidencijaPismena.ZalbaPoDrugostupanjskomTijeluLookup
  >('EvidencijaPismena/ZalbaPoDrugostupanjskomTijeluLookup');
  export interface ZalbaPoDrugostupanjskomTijeluLookup {
    ID: string;
    Naziv?: string;
    ImaRazloge?: boolean;
  }

  export const RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookupInfo = createStructureInfo<
    EvidencijaPismena.RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookup
  >('EvidencijaPismena/RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookup');
  export interface RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookup {
    ID: string;
    Naziv?: string;
  }

  export const ZalbaPoPrvostupanjskomTijeluLookupInfo = createStructureInfo<
    EvidencijaPismena.ZalbaPoPrvostupanjskomTijeluLookup
  >('EvidencijaPismena/ZalbaPoPrvostupanjskomTijeluLookup');
  export interface ZalbaPoPrvostupanjskomTijeluLookup {
    ID: string;
    Naziv?: string;
  }

  export const OdlukaOZahtjevuLookupInfo = createStructureInfo<
    EvidencijaPismena.OdlukaOZahtjevuLookup
  >('EvidencijaPismena/OdlukaOZahtjevuLookup');
  export interface OdlukaOZahtjevuLookup {
    ID: string;
    Naziv?: string;
  }

  export const VrstaUpravnogPostupkaLookupInfo = createStructureInfo<
    EvidencijaPismena.VrstaUpravnogPostupkaLookup
  >('EvidencijaPismena/VrstaUpravnogPostupkaLookup');
  export interface VrstaUpravnogPostupkaLookup {
    ID: string;
    Oznaka?: string;
    Naziv?: string;
  }

  export const StatusPredmetaLookupInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaLookup
  >('EvidencijaPismena/StatusPredmetaLookup');
  export interface StatusPredmetaLookup {
    ID: string;
    Naziv?: string;
  }

  export const BrojPriloga_MinValueFilterInfo = createStructureInfo<
    EvidencijaPismena.BrojPriloga_MinValueFilter
  >('EvidencijaPismena/BrojPriloga_MinValueFilter');
  export interface BrojPriloga_MinValueFilter {}

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntilInfo = createStructureInfo<
    EvidencijaPismena.OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntil
  >('EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntil');
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const Predmet_ChangesActiveUntilInfo = createStructureInfo<
    EvidencijaPismena.Predmet_ChangesActiveUntil
  >('EvidencijaPismena/Predmet_ChangesActiveUntil');
  export interface Predmet_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const ValidForTipPredmetaInfo = createStructureInfo<EvidencijaPismena.ValidForTipPredmeta>(
    'EvidencijaPismena/ValidForTipPredmeta'
  );
  export interface ValidForTipPredmeta {}

  export const PosiljateljIliStvarateljInfo = createStructureInfo<
    EvidencijaPismena.PosiljateljIliStvaratelj
  >('EvidencijaPismena/PosiljateljIliStvaratelj');
  export interface PosiljateljIliStvaratelj {}

  export const ChangeBrisanoInfo = createStructureInfo<EvidencijaPismena.ChangeBrisano>(
    'EvidencijaPismena/ChangeBrisano'
  );
  export interface ChangeBrisano {}

  export const ChangePredmetBrisanInfo = createStructureInfo<EvidencijaPismena.ChangePredmetBrisan>(
    'EvidencijaPismena/ChangePredmetBrisan'
  );
  export interface ChangePredmetBrisan {}

  export const BrisanoPismenoDodatneOznakeInfo = createStructureInfo<
    EvidencijaPismena.BrisanoPismenoDodatneOznake
  >('EvidencijaPismena/BrisanoPismenoDodatneOznake');
  export interface BrisanoPismenoDodatneOznake {}

  export const ValidForPismenoEditPismenoDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.ValidForPismenoEditPismenoDodatnaOznaka
  >('EvidencijaPismena/ValidForPismenoEditPismenoDodatnaOznaka');
  export interface ValidForPismenoEditPismenoDodatnaOznaka {}

  export const PismenoValidForPismenoEditPismenoDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.PismenoValidForPismenoEditPismenoDodatnaOznaka
  >('EvidencijaPismena/PismenoValidForPismenoEditPismenoDodatnaOznaka');
  export interface PismenoValidForPismenoEditPismenoDodatnaOznaka {}

  export const EditBrisanoPismenoInfo = createStructureInfo<EvidencijaPismena.EditBrisanoPismeno>(
    'EvidencijaPismena/EditBrisanoPismeno'
  );
  export interface EditBrisanoPismeno {}

  export const PismenoValidForPismenoEditInfo = createStructureInfo<
    EvidencijaPismena.PismenoValidForPismenoEdit
  >('EvidencijaPismena/PismenoValidForPismenoEdit');
  export interface PismenoValidForPismenoEdit {}

  export const PredmetValidForPismenoEditInfo = createStructureInfo<
    EvidencijaPismena.PredmetValidForPismenoEdit
  >('EvidencijaPismena/PredmetValidForPismenoEdit');
  export interface PredmetValidForPismenoEdit {}

  export const IstoPismenoInfo = createStructureInfo<EvidencijaPismena.IstoPismeno>(
    'EvidencijaPismena/IstoPismeno'
  );
  export interface IstoPismeno {}

  export const PredmetSadrziPismenoInfo = createStructureInfo<
    EvidencijaPismena.PredmetSadrziPismeno
  >('EvidencijaPismena/PredmetSadrziPismeno');
  export interface PredmetSadrziPismeno {}

  export const BrisanoPismenoSluzbeneBiljeskeInfo = createStructureInfo<
    EvidencijaPismena.BrisanoPismenoSluzbeneBiljeske
  >('EvidencijaPismena/BrisanoPismenoSluzbeneBiljeske');
  export interface BrisanoPismenoSluzbeneBiljeske {}

  export const ValidForPismenoEditInfo = createStructureInfo<EvidencijaPismena.ValidForPismenoEdit>(
    'EvidencijaPismena/ValidForPismenoEdit'
  );
  export interface ValidForPismenoEdit {}

  export const StatusPismenaValidForPismenoEditInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaValidForPismenoEdit
  >('EvidencijaPismena/StatusPismenaValidForPismenoEdit');
  export interface StatusPismenaValidForPismenoEdit {}

  export const NoviPlanKlasifikacijskihOznakaUBuducnostiInfo = createStructureInfo<
    EvidencijaPismena.NoviPlanKlasifikacijskihOznakaUBuducnosti
  >('EvidencijaPismena/NoviPlanKlasifikacijskihOznakaUBuducnosti');
  export interface NoviPlanKlasifikacijskihOznakaUBuducnosti {}

  export const VrijediOdProvjeraInfo = createStructureInfo<EvidencijaPismena.VrijediOdProvjera>(
    'EvidencijaPismena/VrijediOdProvjera'
  );
  export interface VrijediOdProvjera {}

  export const PodsjetnikForPastDateInfo = createStructureInfo<
    EvidencijaPismena.PodsjetnikForPastDate
  >('EvidencijaPismena/PodsjetnikForPastDate');
  export interface PodsjetnikForPastDate {}

  export const EditBrisaniPredmetInfo = createStructureInfo<EvidencijaPismena.EditBrisaniPredmet>(
    'EvidencijaPismena/EditBrisaniPredmet'
  );
  export interface EditBrisaniPredmet {}

  export const EditVezaniPredmetInfo = createStructureInfo<EvidencijaPismena.EditVezaniPredmet>(
    'EvidencijaPismena/EditVezaniPredmet'
  );
  export interface EditVezaniPredmet {}

  export const ValidForPredmetEditInfo = createStructureInfo<EvidencijaPismena.ValidForPredmetEdit>(
    'EvidencijaPismena/ValidForPredmetEdit'
  );
  export interface ValidForPredmetEdit {}

  export const BrisanoPredmetDodatneOznakeInfo = createStructureInfo<
    EvidencijaPismena.BrisanoPredmetDodatneOznake
  >('EvidencijaPismena/BrisanoPredmetDodatneOznake');
  export interface BrisanoPredmetDodatneOznake {}

  export const ValidForPredmetEditPredmetDodatnaOznakaInfo = createStructureInfo<
    EvidencijaPismena.ValidForPredmetEditPredmetDodatnaOznaka
  >('EvidencijaPismena/ValidForPredmetEditPredmetDodatnaOznaka');
  export interface ValidForPredmetEditPredmetDodatnaOznaka {}

  export const PredmetUpozorenjeIgnoriranoPredmetBrisanInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpozorenjeIgnoriranoPredmetBrisan
  >('EvidencijaPismena/PredmetUpozorenjeIgnoriranoPredmetBrisan');
  export interface PredmetUpozorenjeIgnoriranoPredmetBrisan {}

  export const PredmetUpozorenjeIgnoriranoPredmetVezanInfo = createStructureInfo<
    EvidencijaPismena.PredmetUpozorenjeIgnoriranoPredmetVezan
  >('EvidencijaPismena/PredmetUpozorenjeIgnoriranoPredmetVezan');
  export interface PredmetUpozorenjeIgnoriranoPredmetVezan {}

  export const MijenjanjeVezanogPredmetaUP2Info = createStructureInfo<
    EvidencijaPismena.MijenjanjeVezanogPredmetaUP2
  >('EvidencijaPismena/MijenjanjeVezanogPredmetaUP2');
  export interface MijenjanjeVezanogPredmetaUP2 {}

  export const MijenjanjeVezanogPredmetaUP1Info = createStructureInfo<
    EvidencijaPismena.MijenjanjeVezanogPredmetaUP1
  >('EvidencijaPismena/MijenjanjeVezanogPredmetaUP1');
  export interface MijenjanjeVezanogPredmetaUP1 {}

  export const DodavanjePrilogaBrisanomPredmetuTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.DodavanjePrilogaBrisanomPredmetuTemeljemPismena
  >('EvidencijaPismena/DodavanjePrilogaBrisanomPredmetuTemeljemPismena');
  export interface DodavanjePrilogaBrisanomPredmetuTemeljemPismena {}

  export const DatumNastankaUBuducnostiInfo = createStructureInfo<
    EvidencijaPismena.DatumNastankaUBuducnosti
  >('EvidencijaPismena/DatumNastankaUBuducnosti');
  export interface DatumNastankaUBuducnosti {}

  export const DodavanjePrilogaObrisanomPredmetuInfo = createStructureInfo<
    EvidencijaPismena.DodavanjePrilogaObrisanomPredmetu
  >('EvidencijaPismena/DodavanjePrilogaObrisanomPredmetu');
  export interface DodavanjePrilogaObrisanomPredmetu {}

  export const DodavanjePrilogaVezanomPredmetuInfo = createStructureInfo<
    EvidencijaPismena.DodavanjePrilogaVezanomPredmetu
  >('EvidencijaPismena/DodavanjePrilogaVezanomPredmetu');
  export interface DodavanjePrilogaVezanomPredmetu {}

  export const PismenoSadrziPrilogInfo = createStructureInfo<EvidencijaPismena.PismenoSadrziPrilog>(
    'EvidencijaPismena/PismenoSadrziPrilog'
  );
  export interface PismenoSadrziPrilog {}

  export const PredmetSadrziPrilogInfo = createStructureInfo<EvidencijaPismena.PredmetSadrziPrilog>(
    'EvidencijaPismena/PredmetSadrziPrilog'
  );
  export interface PredmetSadrziPrilog {}

  export const RasporedjivanjePredmetBrisanTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjePredmetBrisanTemeljemPismena
  >('EvidencijaPismena/RasporedjivanjePredmetBrisanTemeljemPismena');
  export interface RasporedjivanjePredmetBrisanTemeljemPismena {}

  export const RasporedjivanjePredmetVezanTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjePredmetVezanTemeljemPismena
  >('EvidencijaPismena/RasporedjivanjePredmetVezanTemeljemPismena');
  export interface RasporedjivanjePredmetVezanTemeljemPismena {}

  export const RasporedjivanjePismenoBrisanoTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjePismenoBrisanoTemeljemPismena
  >('EvidencijaPismena/RasporedjivanjePismenoBrisanoTemeljemPismena');
  export interface RasporedjivanjePismenoBrisanoTemeljemPismena {}

  export const RasporedjivanjePredmetBrisanInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjePredmetBrisan
  >('EvidencijaPismena/RasporedjivanjePredmetBrisan');
  export interface RasporedjivanjePredmetBrisan {}

  export const RasporedjivanjePredmetVezanInfo = createStructureInfo<
    EvidencijaPismena.RasporedjivanjePredmetVezan
  >('EvidencijaPismena/RasporedjivanjePredmetVezan');
  export interface RasporedjivanjePredmetVezan {}

  export const StatusPismenaOnlyActiveInfo = createStructureInfo<
    EvidencijaPismena.StatusPismenaOnlyActive
  >('EvidencijaPismena/StatusPismenaOnlyActive');
  export interface StatusPismenaOnlyActive {}

  export const NoneditableStatusInfo = createStructureInfo<EvidencijaPismena.NoneditableStatus>(
    'EvidencijaPismena/NoneditableStatus'
  );
  export interface NoneditableStatus {}

  export const SamoUserEditableStatusiInfo = createStructureInfo<
    EvidencijaPismena.SamoUserEditableStatusi
  >('EvidencijaPismena/SamoUserEditableStatusi');
  export interface SamoUserEditableStatusi {}

  export const StatusPredmetaOnlyActiveInfo = createStructureInfo<
    EvidencijaPismena.StatusPredmetaOnlyActive
  >('EvidencijaPismena/StatusPredmetaOnlyActive');
  export interface StatusPredmetaOnlyActive {}

  export const PredefiniraniTipPismenaKlasifikacijskeOznakeInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPismenaKlasifikacijskeOznake
  >('EvidencijaPismena/PredefiniraniTipPismenaKlasifikacijskeOznake');
  export interface PredefiniraniTipPismenaKlasifikacijskeOznake {}

  export const PredefiniraniTipPismenaUstrojstveneJediniceInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPismenaUstrojstveneJedinice
  >('EvidencijaPismena/PredefiniraniTipPismenaUstrojstveneJedinice');
  export interface PredefiniraniTipPismenaUstrojstveneJedinice {}

  export const PredefiniraniTipPismenaTipoviPredmetaInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPismenaTipoviPredmeta
  >('EvidencijaPismena/PredefiniraniTipPismenaTipoviPredmeta');
  export interface PredefiniraniTipPismenaTipoviPredmeta {}

  export const PredefiniraniTipPredmetaKlasifikacijskeOznakeInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPredmetaKlasifikacijskeOznake
  >('EvidencijaPismena/PredefiniraniTipPredmetaKlasifikacijskeOznake');
  export interface PredefiniraniTipPredmetaKlasifikacijskeOznake {}

  export const PredefiniraniTipPredmetaUstrojstveneJediniceInfo = createStructureInfo<
    EvidencijaPismena.PredefiniraniTipPredmetaUstrojstveneJedinice
  >('EvidencijaPismena/PredefiniraniTipPredmetaUstrojstveneJedinice');
  export interface PredefiniraniTipPredmetaUstrojstveneJedinice {}

  export const VezivanjePredmetBrisanTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetBrisanTemeljemPismena
  >('EvidencijaPismena/VezivanjePredmetBrisanTemeljemPismena');
  export interface VezivanjePredmetBrisanTemeljemPismena {}

  export const VezivanjePredmetVezanTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetVezanTemeljemPismena
  >('EvidencijaPismena/VezivanjePredmetVezanTemeljemPismena');
  export interface VezivanjePredmetVezanTemeljemPismena {}

  export const VezivanjePredmetGlavniTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetGlavniTemeljemPismena
  >('EvidencijaPismena/VezivanjePredmetGlavniTemeljemPismena');
  export interface VezivanjePredmetGlavniTemeljemPismena {}

  export const VezivanjePismenoBrisanoTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePismenoBrisanoTemeljemPismena
  >('EvidencijaPismena/VezivanjePismenoBrisanoTemeljemPismena');
  export interface VezivanjePismenoBrisanoTemeljemPismena {}

  export const VezivanjePredmetBrisanInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetBrisan
  >('EvidencijaPismena/VezivanjePredmetBrisan');
  export interface VezivanjePredmetBrisan {}

  export const VezivanjeGlavniPredmetBrisanInfo = createStructureInfo<
    EvidencijaPismena.VezivanjeGlavniPredmetBrisan
  >('EvidencijaPismena/VezivanjeGlavniPredmetBrisan');
  export interface VezivanjeGlavniPredmetBrisan {}

  export const VezivanjePredmetVezanInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetVezan
  >('EvidencijaPismena/VezivanjePredmetVezan');
  export interface VezivanjePredmetVezan {}

  export const VezivanjeGlavniPredmetVezanInfo = createStructureInfo<
    EvidencijaPismena.VezivanjeGlavniPredmetVezan
  >('EvidencijaPismena/VezivanjeGlavniPredmetVezan');
  export interface VezivanjeGlavniPredmetVezan {}

  export const VezivanjePredmetGlavniInfo = createStructureInfo<
    EvidencijaPismena.VezivanjePredmetGlavni
  >('EvidencijaPismena/VezivanjePredmetGlavni');
  export interface VezivanjePredmetGlavni {}

  export const PonistiVezivanjePredmetBrisanInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjePredmetBrisan
  >('EvidencijaPismena/PonistiVezivanjePredmetBrisan');
  export interface PonistiVezivanjePredmetBrisan {}

  export const PonistiVezivanjePredmetGlavniInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjePredmetGlavni
  >('EvidencijaPismena/PonistiVezivanjePredmetGlavni');
  export interface PonistiVezivanjePredmetGlavni {}

  export const PonistiVezivanjePredmetBrisanTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjePredmetBrisanTemeljemPismena
  >('EvidencijaPismena/PonistiVezivanjePredmetBrisanTemeljemPismena');
  export interface PonistiVezivanjePredmetBrisanTemeljemPismena {}

  export const PonistiVezivanjePredmetGlavniTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjePredmetGlavniTemeljemPismena
  >('EvidencijaPismena/PonistiVezivanjePredmetGlavniTemeljemPismena');
  export interface PonistiVezivanjePredmetGlavniTemeljemPismena {}

  export const PonistiVezivanjePismenoBrisanoTemeljemPismenaInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjePismenoBrisanoTemeljemPismena
  >('EvidencijaPismena/PonistiVezivanjePismenoBrisanoTemeljemPismena');
  export interface PonistiVezivanjePismenoBrisanoTemeljemPismena {}

  export const BrisanjePismenaOdlozenogUAdActaInfo = createStructureInfo<
    EvidencijaPismena.BrisanjePismenaOdlozenogUAdActa
  >('EvidencijaPismena/BrisanjePismenaOdlozenogUAdActa');
  export interface BrisanjePismenaOdlozenogUAdActa {}

  export const PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnikInfo = createStructureInfo<
    EvidencijaPismena.PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnik
  >('EvidencijaPismena/PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnik');
  export interface PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnik {}

  export const PonistiVezivanjeOdlozenUPismohranuInfo = createStructureInfo<
    EvidencijaPismena.PonistiVezivanjeOdlozenUPismohranu
  >('EvidencijaPismena/PonistiVezivanjeOdlozenUPismohranu');
  export interface PonistiVezivanjeOdlozenUPismohranu {}

  export const InvalidStupanjTajnostiInfo = createStructureInfo<
    EvidencijaPismena.InvalidStupanjTajnosti
  >('EvidencijaPismena/InvalidStupanjTajnosti');
  export interface InvalidStupanjTajnosti {}

  export const NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrduInfo = createStructureInfo<
    EvidencijaPismena.NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrdu
  >('EvidencijaPismena/NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrdu');
  export interface NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrdu {}

  export const SystemRequiredCreatedDateInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredCreatedDate
  >('EvidencijaPismena/SystemRequiredCreatedDate');
  export interface SystemRequiredCreatedDate {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredDatumKreiranja
  >('EvidencijaPismena/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDatumVrijemeInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredDatumVrijeme
  >('EvidencijaPismena/SystemRequiredDatumVrijeme');
  export interface SystemRequiredDatumVrijeme {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredKreirao
  >('EvidencijaPismena/SystemRequiredKreirao');
  export interface SystemRequiredKreirao {}

  export const SystemRequiredCreatedByInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredCreatedBy
  >('EvidencijaPismena/SystemRequiredCreatedBy');
  export interface SystemRequiredCreatedBy {}

  export const SystemRequiredOznakaInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredOznaka
  >('EvidencijaPismena/SystemRequiredOznaka');
  export interface SystemRequiredOznaka {}

  export const SystemRequiredSifraInfo = createStructureInfo<EvidencijaPismena.SystemRequiredSifra>(
    'EvidencijaPismena/SystemRequiredSifra'
  );
  export interface SystemRequiredSifra {}

  export const SystemRequiredCtxIdInfo = createStructureInfo<EvidencijaPismena.SystemRequiredCtxId>(
    'EvidencijaPismena/SystemRequiredCtxId'
  );
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredActive
  >('EvidencijaPismena/SystemRequiredActive');
  export interface SystemRequiredActive {}

  export const SystemRequiredDocumentTemplateInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredDocumentTemplate
  >('EvidencijaPismena/SystemRequiredDocumentTemplate');
  export interface SystemRequiredDocumentTemplate {}

  export const SystemRequiredPlanKlasifikacijskihOznakaInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredPlanKlasifikacijskihOznaka
  >('EvidencijaPismena/SystemRequiredPlanKlasifikacijskihOznaka');
  export interface SystemRequiredPlanKlasifikacijskihOznaka {}

  export const SystemRequiredDjelatnostInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredDjelatnost
  >('EvidencijaPismena/SystemRequiredDjelatnost');
  export interface SystemRequiredDjelatnost {}

  export const SystemRequiredDosjeInfo = createStructureInfo<EvidencijaPismena.SystemRequiredDosje>(
    'EvidencijaPismena/SystemRequiredDosje'
  );
  export interface SystemRequiredDosje {}

  export const SystemRequiredStatusPredmetaInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredStatusPredmeta
  >('EvidencijaPismena/SystemRequiredStatusPredmeta');
  export interface SystemRequiredStatusPredmeta {}

  export const SystemRequiredPredmetInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredPredmet
  >('EvidencijaPismena/SystemRequiredPredmet');
  export interface SystemRequiredPredmet {}

  export const SystemRequiredEntityInfo = createStructureInfo<
    EvidencijaPismena.SystemRequiredEntity
  >('EvidencijaPismena/SystemRequiredEntity');
  export interface SystemRequiredEntity {}
}

export module EvidencijaPismenaHelpers {}

export module Ustrojstvo {
  export const StatusPismenaMoguceKorisnickeGrupeInfo = createStructureInfo<
    Ustrojstvo.StatusPismenaMoguceKorisnickeGrupe
  >('Ustrojstvo/StatusPismenaMoguceKorisnickeGrupe');
  export interface StatusPismenaMoguceKorisnickeGrupe {
    StatusPismenaID?: string;
  }

  export const StatusPredmetaMoguceKorisnickeGrupeInfo = createStructureInfo<
    Ustrojstvo.StatusPredmetaMoguceKorisnickeGrupe
  >('Ustrojstvo/StatusPredmetaMoguceKorisnickeGrupe');
  export interface StatusPredmetaMoguceKorisnickeGrupe {
    StatusPredmetaID?: string;
  }

  export const ZaposlenikInfo = createStructureInfo<Ustrojstvo.Zaposlenik>('Ustrojstvo/Zaposlenik');
  export interface Zaposlenik {
    ID: string;
    Ime: string;
    Prezime: string;
    Oib?: string;
    UserName?: string;
    BrojcanaOznaka: string;
    PripadaID?: string;
    Napomena?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UstrojstvenaJedinicaInfo = createStructureInfo<Ustrojstvo.UstrojstvenaJedinica>(
    'Ustrojstvo/UstrojstvenaJedinica'
  );
  export interface UstrojstvenaJedinica {
    ID: string;
    BrojcanaOznaka: string;
    Naziv: string;
    USastavuID?: string;
    Napomena?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CtxUstrojstvenaJedinicaInfo = createStructureInfo<
    Ustrojstvo.CtxUstrojstvenaJedinica
  >('Ustrojstvo/CtxUstrojstvenaJedinica');
  export interface CtxUstrojstvenaJedinica {
    ID: string;
    CtxId?: number;
  }

  export const LokacijaPosiljkaLookupFilterInfo = createStructureInfo<
    Ustrojstvo.LokacijaPosiljkaLookupFilter
  >('Ustrojstvo/LokacijaPosiljkaLookupFilter');
  export interface LokacijaPosiljkaLookupFilter {
    PrimateljID?: string;
  }

  export const LokacijeUstrojstveneJediniceIliZaposlenikaInfo = createStructureInfo<
    Ustrojstvo.LokacijeUstrojstveneJediniceIliZaposlenika
  >('Ustrojstvo/LokacijeUstrojstveneJediniceIliZaposlenika');
  export interface LokacijeUstrojstveneJediniceIliZaposlenika {
    PrimateljID?: string;
  }

  export const GrupaSuradnikaInfo = createStructureInfo<Ustrojstvo.GrupaSuradnika>(
    'Ustrojstvo/GrupaSuradnika'
  );
  export interface GrupaSuradnika {
    ID: string;
    Naziv: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    JeZaSveKorisnike?: boolean;
    Active?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciInfo = createStructureInfo<
    Ustrojstvo.GrupaSuradnikaSluzbenici
  >('Ustrojstvo/GrupaSuradnikaSluzbenici');
  export interface GrupaSuradnikaSluzbenici {
    ID: string;
    GrupaSuradnikaID?: string;
    SluzbenikID?: string;
  }

  export const GrupaSuradnikaExtendedInfo = createStructureInfo<Ustrojstvo.GrupaSuradnikaExtended>(
    'Ustrojstvo/GrupaSuradnikaExtended'
  );
  export interface GrupaSuradnikaExtended {
    ID: string;
    Naziv?: string;
    Kreirao?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
    JeZaSveKorisnike?: boolean;
  }

  export const GrupaSuradnikaBrowseInfo = createStructureInfo<Ustrojstvo.GrupaSuradnikaBrowse>(
    'Ustrojstvo/GrupaSuradnikaBrowse'
  );
  export interface GrupaSuradnikaBrowse {
    ID: string;
    Naziv?: string;
    Kreirao?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
    JeZaSveKorisnike?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciExtendedInfo = createStructureInfo<
    Ustrojstvo.GrupaSuradnikaSluzbeniciExtended
  >('Ustrojstvo/GrupaSuradnikaSluzbeniciExtended');
  export interface GrupaSuradnikaSluzbeniciExtended {
    ID: string;
    GrupaSuradnikaID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciBrowseInfo = createStructureInfo<
    Ustrojstvo.GrupaSuradnikaSluzbeniciBrowse
  >('Ustrojstvo/GrupaSuradnikaSluzbeniciBrowse');
  export interface GrupaSuradnikaSluzbeniciBrowse {
    ID: string;
    GrupaSuradnikaID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
  }

  export const UpsertGrupaSuradnikaInfo = createStructureInfo<Ustrojstvo.UpsertGrupaSuradnika>(
    'Ustrojstvo/UpsertGrupaSuradnika'
  );
  export interface UpsertGrupaSuradnika {
    GrupaSuradnika?: string;
    Sluzbenici?: string;
  }

  export const KorisnickaGrupaInfo = createStructureInfo<Ustrojstvo.KorisnickaGrupa>(
    'Ustrojstvo/KorisnickaGrupa'
  );
  export interface KorisnickaGrupa {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const KorisnickaGrupaBrowseInfo = createStructureInfo<Ustrojstvo.KorisnickaGrupaBrowse>(
    'Ustrojstvo/KorisnickaGrupaBrowse'
  );
  export interface KorisnickaGrupaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const ZaposlenikMoguceKorisnickeGrupeInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikMoguceKorisnickeGrupe
  >('Ustrojstvo/ZaposlenikMoguceKorisnickeGrupe');
  export interface ZaposlenikMoguceKorisnickeGrupe {
    ZaposlenikID?: string;
  }

  export const ZaposlenikKorisnickaGrupaInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisnickaGrupa
  >('Ustrojstvo/ZaposlenikKorisnickaGrupa');
  export interface ZaposlenikKorisnickaGrupa {
    ID: string;
    ZaposlenikID: string;
    KorisnickaGrupaID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    DodijelioID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    Active?: boolean;
  }

  export const ZaposlenikKorisnickaGrupaExtInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisnickaGrupaExt
  >('Ustrojstvo/ZaposlenikKorisnickaGrupaExt');
  export interface ZaposlenikKorisnickaGrupaExt {
    ID: string;
    IsVrijediOdValid?: boolean;
    IsValid?: boolean;
  }

  export const ZaposlenikKorisnickaGrupaBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisnickaGrupaBrowse
  >('Ustrojstvo/ZaposlenikKorisnickaGrupaBrowse');
  export interface ZaposlenikKorisnickaGrupaBrowse {
    ID: string;
    ZaposlenikID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    Active?: boolean;
    KorisnickaGrupaNaziv?: string;
    DodijelioNaziv?: string;
    ObrisaoNaziv?: string;
    IsValid?: boolean;
  }

  export const LokacijaInfo = createStructureInfo<Ustrojstvo.Lokacija>('Ustrojstvo/Lokacija');
  export interface Lokacija {
    ID: string;
    Naziv: string;
    Adresa: string;
    Active?: boolean;
  }

  export const LokacijaLookupInfo = createStructureInfo<Ustrojstvo.LokacijaLookup>(
    'Ustrojstvo/LokacijaLookup'
  );
  export interface LokacijaLookup {
    ID: string;
    Adresa?: string;
    Naziv?: string;
    Active?: boolean;
    NazivsAdresom?: string;
  }

  export const LokacijaBrowseInfo = createStructureInfo<Ustrojstvo.LokacijaBrowse>(
    'Ustrojstvo/LokacijaBrowse'
  );
  export interface LokacijaBrowse {
    ID: string;
    Naziv?: string;
  }

  export const LokacijaNazivAdresaContainsInfo = createStructureInfo<
    Ustrojstvo.LokacijaNazivAdresaContains
  >('Ustrojstvo/LokacijaNazivAdresaContains');
  export interface LokacijaNazivAdresaContains {
    Pattern?: string;
  }

  export const LokacijaSAdresomLookupInfo = createStructureInfo<Ustrojstvo.LokacijaSAdresomLookup>(
    'Ustrojstvo/LokacijaSAdresomLookup'
  );
  export interface LokacijaSAdresomLookup {
    ID: string;
    NazivsAdresom?: string;
  }

  export const LokacijaUstrojstveneJediniceFilterInfo = createStructureInfo<
    Ustrojstvo.LokacijaUstrojstveneJediniceFilter
  >('Ustrojstvo/LokacijaUstrojstveneJediniceFilter');
  export interface LokacijaUstrojstveneJediniceFilter {
    ActiveSince?: Date;
    USastavuID?: string;
  }

  export const TrenutnaLokacijaUstrojstveneJediniceFilterInfo = createStructureInfo<
    Ustrojstvo.TrenutnaLokacijaUstrojstveneJediniceFilter
  >('Ustrojstvo/TrenutnaLokacijaUstrojstveneJediniceFilter');
  export interface TrenutnaLokacijaUstrojstveneJediniceFilter {
    UstrojstvenaJedinicaId?: string;
    TrenutnaLokacijaId?: string;
  }

  export const LokacijaPredmetLookupFilterInfo = createStructureInfo<
    Ustrojstvo.LokacijaPredmetLookupFilter
  >('Ustrojstvo/LokacijaPredmetLookupFilter');
  export interface LokacijaPredmetLookupFilter {
    UNadleznostiID?: string;
  }

  export const UstrojstvenaJedinicaSaLokacijamaInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaSaLokacijama
  >('Ustrojstvo/UstrojstvenaJedinicaSaLokacijama');
  export interface UstrojstvenaJedinicaSaLokacijama {
    ID: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
  }

  export const OvlasteniSluzbenici_HistoryInfo = createStructureInfo<
    Ustrojstvo.OvlasteniSluzbenici_History
  >('Ustrojstvo/OvlasteniSluzbenici_History');
  export interface OvlasteniSluzbenici_History {
    ID: string;
    OvlasteniSluzbenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const CurrentOvlastenjaByOvlasteniSuzbenikInfo = createStructureInfo<
    Ustrojstvo.CurrentOvlastenjaByOvlasteniSuzbenik
  >('Ustrojstvo/CurrentOvlastenjaByOvlasteniSuzbenik');
  export interface CurrentOvlastenjaByOvlasteniSuzbenik {
    OvlasteniSluzbenikID?: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowse');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const ZaposlenikPravaRadaBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaBrowse
  >('Ustrojstvo/ZaposlenikPravaRadaBrowse');
  export interface ZaposlenikPravaRadaBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const TrenutnaIBuducaPravaRadaInfo = createStructureInfo<
    Ustrojstvo.TrenutnaIBuducaPravaRada
  >('Ustrojstvo/TrenutnaIBuducaPravaRada');
  export interface TrenutnaIBuducaPravaRada {}

  export const ZaposlenikPravaRadaZaBrisatInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaZaBrisat
  >('Ustrojstvo/ZaposlenikPravaRadaZaBrisat');
  export interface ZaposlenikPravaRadaZaBrisat {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaRadaZaBrisatBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaZaBrisatBrowse
  >('Ustrojstvo/ZaposlenikPravaRadaZaBrisatBrowse');
  export interface ZaposlenikPravaRadaZaBrisatBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaRadaBrowseBaseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaRadaBrowseBase
  >('Ustrojstvo/UstrojstvenaJedinicaPravaRadaBrowseBase');
  export interface UstrojstvenaJedinicaPravaRadaBrowseBase {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaRadaBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaRadaBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaPravaRadaBrowse');
  export interface UstrojstvenaJedinicaPravaRadaBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaRadaZaBrisatInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaRadaZaBrisat
  >('Ustrojstvo/UstrojstvenaJedinicaPravaRadaZaBrisat');
  export interface UstrojstvenaJedinicaPravaRadaZaBrisat {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaRadaZaBrisatBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaRadaZaBrisatBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaPravaRadaZaBrisatBrowse');
  export interface UstrojstvenaJedinicaPravaRadaZaBrisatBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const PravoRadaUvidaAktivnoTrenutnoIBuduceInfo = createStructureInfo<
    Ustrojstvo.PravoRadaUvidaAktivnoTrenutnoIBuduce
  >('Ustrojstvo/PravoRadaUvidaAktivnoTrenutnoIBuduce');
  export interface PravoRadaUvidaAktivnoTrenutnoIBuduce {
    ID: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    ZaposlenikIme?: string;
    ZaposlenikPrezime?: string;
    ZaposlenikPotpunaBrojcanaOznaka?: string;
    ZaposlenikAktivan?: boolean;
    PripadaID?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
    UJNaziv?: string;
    UJPotpunaBrojcanaOznaka?: string;
    UJAktivna?: boolean;
  }

  export const UstrojstvenaJedinicaPravaRadaUvidaBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaRadaUvidaBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaPravaRadaUvidaBrowse');
  export interface UstrojstvenaJedinicaPravaRadaUvidaBrowse {
    ID: string;
    ZaposlenikPrezime?: string;
    ZaposlenikIme?: string;
    ZaposlenikPotpunaBrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
    ZaposlenikAktivan?: boolean;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikSearchInfo = createStructureInfo<Ustrojstvo.ZaposlenikSearch>(
    'Ustrojstvo/ZaposlenikSearch'
  );
  export interface ZaposlenikSearch {
    Pattern?: string;
  }

  export const ZaposlenikPravaRadaUvidaUjBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaUvidaUjBrowse
  >('Ustrojstvo/ZaposlenikPravaRadaUvidaUjBrowse');
  export interface ZaposlenikPravaRadaUvidaUjBrowse {
    ID: string;
    UJNaziv?: string;
    UJPotpunaBrojcanaOznaka?: string;
    UJAktivna?: boolean;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    PripadaID?: string;
  }

  export const SluzbeniciSPravomUvida_HistoryInfo = createStructureInfo<
    Ustrojstvo.SluzbeniciSPravomUvida_History
  >('Ustrojstvo/SluzbeniciSPravomUvida_History');
  export interface SluzbeniciSPravomUvida_History {
    ID: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const CurrentPravaUvidaByZaposlenikInfo = createStructureInfo<
    Ustrojstvo.CurrentPravaUvidaByZaposlenik
  >('Ustrojstvo/CurrentPravaUvidaByZaposlenik');
  export interface CurrentPravaUvidaByZaposlenik {
    ZaposlenikID?: string;
  }

  export const SluzbeniciSPravomUvida_HistoryBrowseInfo = createStructureInfo<
    Ustrojstvo.SluzbeniciSPravomUvida_HistoryBrowse
  >('Ustrojstvo/SluzbeniciSPravomUvida_HistoryBrowse');
  export interface SluzbeniciSPravomUvida_HistoryBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const ZaposlenikPravaUvidaBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaUvidaBrowse
  >('Ustrojstvo/ZaposlenikPravaUvidaBrowse');
  export interface ZaposlenikPravaUvidaBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const TrenutnaIBuducaPravaUvidaInfo = createStructureInfo<
    Ustrojstvo.TrenutnaIBuducaPravaUvida
  >('Ustrojstvo/TrenutnaIBuducaPravaUvida');
  export interface TrenutnaIBuducaPravaUvida {}

  export const UstrojstvenaJedinicaPravaUvidaBrowseBaseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaUvidaBrowseBase
  >('Ustrojstvo/UstrojstvenaJedinicaPravaUvidaBrowseBase');
  export interface UstrojstvenaJedinicaPravaUvidaBrowseBase {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaUvidaBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaUvidaBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaPravaUvidaBrowse');
  export interface UstrojstvenaJedinicaPravaUvidaBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaUvidaZaBrisatInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaUvidaZaBrisat
  >('Ustrojstvo/UstrojstvenaJedinicaPravaUvidaZaBrisat');
  export interface UstrojstvenaJedinicaPravaUvidaZaBrisat {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaUvidaZaBrisatBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPravaUvidaZaBrisatBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaPravaUvidaZaBrisatBrowse');
  export interface UstrojstvenaJedinicaPravaUvidaZaBrisatBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaUvidaZaBrisatInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaUvidaZaBrisat
  >('Ustrojstvo/ZaposlenikPravaUvidaZaBrisat');
  export interface ZaposlenikPravaUvidaZaBrisat {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaUvidaZaBrisatBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaUvidaZaBrisatBrowse
  >('Ustrojstvo/ZaposlenikPravaUvidaZaBrisatBrowse');
  export interface ZaposlenikPravaUvidaZaBrisatBrowse {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const RadnoTijeloInfo = createStructureInfo<Ustrojstvo.RadnoTijelo>(
    'Ustrojstvo/RadnoTijelo'
  );
  export interface RadnoTijelo {
    ID: string;
    Naziv: string;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const RadnoTijelo_ChangesInfo = createStructureInfo<Ustrojstvo.RadnoTijelo_Changes>(
    'Ustrojstvo/RadnoTijelo_Changes'
  );
  export interface RadnoTijelo_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Naziv: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
  }

  export const RadnoTijeloOvlasteniSluzbeniciInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbenici
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbenici');
  export interface RadnoTijeloOvlasteniSluzbenici {
    ID: string;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const VrstaRadnogTijelaInfo = createStructureInfo<Ustrojstvo.VrstaRadnogTijela>(
    'Ustrojstvo/VrstaRadnogTijela'
  );
  export interface VrstaRadnogTijela {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const VrstaRadnogTijelaBrowseInfo = createStructureInfo<
    Ustrojstvo.VrstaRadnogTijelaBrowse
  >('Ustrojstvo/VrstaRadnogTijelaBrowse');
  export interface VrstaRadnogTijelaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const RadnoTijeloAtTimeBrowseInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloAtTimeBrowse
  >('Ustrojstvo/RadnoTijeloAtTimeBrowse');
  export interface RadnoTijeloAtTimeBrowse {
    ID: string;
    Naziv?: string;
    VrstaRadnogTijelaID?: string;
    USastavuID?: string;
    RadomUpravljaID?: string;
    VrstaRadnogTijelaNaziv?: string;
    USastavuNaziv?: string;
    RadomUpravljaNaziv?: string;
    OvlasteniSluzbeniciRadnogTijela?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
  }

  export const RadnoTijeloHistoryInfo = createStructureInfo<Ustrojstvo.RadnoTijeloHistory>(
    'Ustrojstvo/RadnoTijeloHistory'
  );
  export interface RadnoTijeloHistory {
    ActiveSince?: Date;
  }

  export const RadnoTijeloAtTimeSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloAtTimeSmartSearchFilter
  >('Ustrojstvo/RadnoTijeloAtTimeSmartSearchFilter');
  export interface RadnoTijeloAtTimeSmartSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
  }

  export const RadnoTijeloAtTimeGetSelectionInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloAtTimeGetSelection
  >('Ustrojstvo/RadnoTijeloAtTimeGetSelection');
  export interface RadnoTijeloAtTimeGetSelection {
    ActiveSince?: Date;
    IDs?: string;
  }

  export const UpsertRadnoTijeloAtTimeInfo = createStructureInfo<
    Ustrojstvo.UpsertRadnoTijeloAtTime
  >('Ustrojstvo/UpsertRadnoTijeloAtTime');
  export interface UpsertRadnoTijeloAtTime {
    RadnoTijelo?: string;
    OvlasteniSluzbenici?: string;
  }

  export const CheckRadnoTijeloOvlasteniSluzbenikInfo = createStructureInfo<
    Ustrojstvo.CheckRadnoTijeloOvlasteniSluzbenik
  >('Ustrojstvo/CheckRadnoTijeloOvlasteniSluzbenik');
  export interface CheckRadnoTijeloOvlasteniSluzbenik {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloOvlasteniSluzbenikInfo = createStructureInfo<
    Ustrojstvo.UpsertRadnoTijeloOvlasteniSluzbenik
  >('Ustrojstvo/UpsertRadnoTijeloOvlasteniSluzbenik');
  export interface UpsertRadnoTijeloOvlasteniSluzbenik {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloClanInfo = createStructureInfo<Ustrojstvo.UpsertRadnoTijeloClan>(
    'Ustrojstvo/UpsertRadnoTijeloClan'
  );
  export interface UpsertRadnoTijeloClan {
    RadnoTijeloID?: string;
    ClanID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const CheckRadnoTijeloInfo = createStructureInfo<Ustrojstvo.CheckRadnoTijelo>(
    'Ustrojstvo/CheckRadnoTijelo'
  );
  export interface CheckRadnoTijelo {
    RadnoTijeloID?: string;
    AtTime?: Date;
  }

  export const RadnoTijeloChangesInfo = createStructureInfo<Ustrojstvo.RadnoTijeloChanges>(
    'Ustrojstvo/RadnoTijeloChanges'
  );
  export interface RadnoTijeloChanges {
    ID: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const RadnoTijeloChangesLookupInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloChangesLookup
  >('Ustrojstvo/RadnoTijeloChangesLookup');
  export interface RadnoTijeloChangesLookup {
    ID: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const RadnoTijeloChangesLookupSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloChangesLookupSmartSearchFilter
  >('Ustrojstvo/RadnoTijeloChangesLookupSmartSearchFilter');
  export interface RadnoTijeloChangesLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const RadnoTijeloKontaktInfo = createStructureInfo<Ustrojstvo.RadnoTijeloKontakt>(
    'Ustrojstvo/RadnoTijeloKontakt'
  );
  export interface RadnoTijeloKontakt {
    ID: string;
    RadnoTijeloID?: string;
    KontaktID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CheckRadnoTijeloKontaktInfo = createStructureInfo<
    Ustrojstvo.CheckRadnoTijeloKontakt
  >('Ustrojstvo/CheckRadnoTijeloKontakt');
  export interface CheckRadnoTijeloKontakt {
    OsnovniKontaktID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloKontaktInfo = createStructureInfo<
    Ustrojstvo.UpsertRadnoTijeloKontakt
  >('Ustrojstvo/UpsertRadnoTijeloKontakt');
  export interface UpsertRadnoTijeloKontakt {
    OsnovniKontaktID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloClanAtTimeInfo = createStructureInfo<Ustrojstvo.RadnoTijeloClanAtTime>(
    'Ustrojstvo/RadnoTijeloClanAtTime'
  );
  export interface RadnoTijeloClanAtTime {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinica?: string;
    Lokacija?: string;
    RadnoTijeloID?: string;
    ClanID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    IsZaposlenik?: boolean;
    Active?: boolean;
    BaseEntityActive?: boolean;
    ActiveReason?: string;
  }

  export const RadnoTijeloClanAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloClanAtTimeFilter
  >('Ustrojstvo/RadnoTijeloClanAtTimeFilter');
  export interface RadnoTijeloClanAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    Pattern?: string;
  }

  export const RadnoTijeloLogInfo = createStructureInfo<Ustrojstvo.RadnoTijeloLog>(
    'Ustrojstvo/RadnoTijeloLog'
  );
  export interface RadnoTijeloLog {
    ID: string;
    Created?: Date;
    ContextInfo?: string;
    UserName?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const RadnoTijeloLogGetFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloLogGetFilter
  >('Ustrojstvo/RadnoTijeloLogGetFilter');
  export interface RadnoTijeloLogGetFilter {
    RadnoTijeloID?: string;
  }

  export const ComputeRadnoTijeloCurrentInfo = createStructureInfo<
    Ustrojstvo.ComputeRadnoTijeloCurrent
  >('Ustrojstvo/ComputeRadnoTijeloCurrent');
  export interface ComputeRadnoTijeloCurrent {
    ID: string;
    Naziv?: string;
    VrstaRadnogTijelaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
    Active?: boolean;
    AtTime?: Date;
  }

  export const RadnoTijeloCurrentInfo = createStructureInfo<Ustrojstvo.RadnoTijeloCurrent>(
    'Ustrojstvo/RadnoTijeloCurrent'
  );
  export interface RadnoTijeloCurrent {
    ID: string;
    AtTime?: Date;
    Naziv?: string;
    Active?: boolean;
    VrstaRadnogTijelaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
  }

  export const UniqueActiveBrojcanaOznakaInfo = createStructureInfo<
    Ustrojstvo.UniqueActiveBrojcanaOznaka
  >('Ustrojstvo/UniqueActiveBrojcanaOznaka');
  export interface UniqueActiveBrojcanaOznaka {}

  export const UstrojstvenaJedinicaLokacijaInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacija
  >('Ustrojstvo/UstrojstvenaJedinicaLokacija');
  export interface UstrojstvenaJedinicaLokacija {
    ID: string;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UstrojstvenaJedinicaPrethodnikNasljednikInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPrethodnikNasljednik
  >('Ustrojstvo/UstrojstvenaJedinicaPrethodnikNasljednik');
  export interface UstrojstvenaJedinicaPrethodnikNasljednik {
    ID: string;
    UstrojstvenaJedinicaPrethodnikID: string;
    UstrojstvenaJedinicaNasljednikID: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenik
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik {
    ID: string;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
    Napomena?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UpsertZaposlenikPravoRadaInfo = createStructureInfo<
    Ustrojstvo.UpsertZaposlenikPravoRada
  >('Ustrojstvo/UpsertZaposlenikPravoRada');
  export interface UpsertZaposlenikPravoRada {
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Napomena?: string;
  }

  export const UpsertUstrojstvenaJedinicaAtTimeInfo = createStructureInfo<
    Ustrojstvo.UpsertUstrojstvenaJedinicaAtTime
  >('Ustrojstvo/UpsertUstrojstvenaJedinicaAtTime');
  export interface UpsertUstrojstvenaJedinicaAtTime {
    ActiveUntil?: Date;
    UstrojstvenaJedinica?: string;
    Lokacije?: string;
    UstrojstvenaJedinicaPrethodnici?: string;
  }

  export const UpsertUstrojstvenaJedinicaPrethodnikNasljednikInfo = createStructureInfo<
    Ustrojstvo.UpsertUstrojstvenaJedinicaPrethodnikNasljednik
  >('Ustrojstvo/UpsertUstrojstvenaJedinicaPrethodnikNasljednik');
  export interface UpsertUstrojstvenaJedinicaPrethodnikNasljednik {
    UstrojstvenaJedinicaID?: string;
    UstrojstvenaJedinicaPrethodnici?: string;
  }

  export const UpsertUstrojsvenaJedinicaLokacijeForPeriodInfo = createStructureInfo<
    Ustrojstvo.UpsertUstrojsvenaJedinicaLokacijeForPeriod
  >('Ustrojstvo/UpsertUstrojsvenaJedinicaLokacijeForPeriod');
  export interface UpsertUstrojsvenaJedinicaLokacijeForPeriod {
    UstrojstvenaJedinicaID?: string;
    Lokacije?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriodInfo = createStructureInfo<
    Ustrojstvo.UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriod
  >('Ustrojstvo/UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriod');
  export interface UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriod {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenici?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriodInfo = createStructureInfo<
    Ustrojstvo.UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod
  >('Ustrojstvo/UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod');
  export interface UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod {
    UstrojstvenaJedinicaID?: string;
    SluzbeniciSPravomUvida?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertUstrojstvenaJedinicaZaposlenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.UpsertUstrojstvenaJedinicaZaposlenikAtTime
  >('Ustrojstvo/UpsertUstrojstvenaJedinicaZaposlenikAtTime');
  export interface UpsertUstrojstvenaJedinicaZaposlenikAtTime {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const SaveZaposlenikAtTimeInfo = createStructureInfo<Ustrojstvo.SaveZaposlenikAtTime>(
    'Ustrojstvo/SaveZaposlenikAtTime'
  );
  export interface SaveZaposlenikAtTime {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
  }

  export const UpdateUstrojstvenaJedinicaLokacijaInfo = createStructureInfo<
    Ustrojstvo.UpdateUstrojstvenaJedinicaLokacija
  >('Ustrojstvo/UpdateUstrojstvenaJedinicaLokacija');
  export interface UpdateUstrojstvenaJedinicaLokacija {
    UstrojstvenaJedinicaID?: string;
    Lokacije?: string;
  }

  export const UstrojstvenaJedinicaHijerarhijaCurrentInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaHijerarhijaCurrent
  >('Ustrojstvo/UstrojstvenaJedinicaHijerarhijaCurrent');
  export interface UstrojstvenaJedinicaHijerarhijaCurrent {
    ID: string;
    UstrojstvenaJedinicaTopLevelID?: string;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaLevel2ID?: string;
    UstrojstvenaJedinicaLevel3ID?: string;
    UstrojstvenaJedinicaLevel4ID?: string;
    UstrojstvenaJedinicaLevel5ID?: string;
    BrojcanaOznakaStvaratelja?: string;
    UstrojstvenaJedinica?: string;
    UstrojstvenaJedinicaFullPath?: string;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaExtendedInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaExtended
  >('Ustrojstvo/UstrojstvenaJedinicaExtended');
  export interface UstrojstvenaJedinicaExtended {
    ID: string;
    BrojcanaOznakaStvaratelja?: string;
    UstrojstvenaJedinicaFullPath?: string;
    UstrojstvenaJedinica?: string;
  }

  export const UstrojstvenaJedinicaChangesInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaChanges
  >('Ustrojstvo/UstrojstvenaJedinicaChanges');
  export interface UstrojstvenaJedinicaChanges {
    ID: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const UstrojstvenaJedinicaChangesLookupInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaChangesLookup
  >('Ustrojstvo/UstrojstvenaJedinicaChangesLookup');
  export interface UstrojstvenaJedinicaChangesLookup {
    ID: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const UstrojstvenaJedinicaChangesLookupSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaChangesLookupSmartSearchFilter
  >('Ustrojstvo/UstrojstvenaJedinicaChangesLookupSmartSearchFilter');
  export interface UstrojstvenaJedinicaChangesLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const UstrojstveneJediniceHistoryInfo = createStructureInfo<
    Ustrojstvo.UstrojstveneJediniceHistory
  >('Ustrojstvo/UstrojstveneJediniceHistory');
  export interface UstrojstveneJediniceHistory {
    ActiveSince?: Date;
    Pattern?: string;
    VrstaUstrojstveneJediniceID?: string;
    ID?: string;
    ExcludeID?: boolean;
  }

  export const UstrojstvenaJedinicaAtTimeSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeSmartSearchFilter
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeSmartSearchFilter');
  export interface UstrojstvenaJedinicaAtTimeSmartSearchFilter {
    AtTime?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeBrowse
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowse');
  export interface UstrojstvenaJedinicaAtTimeBrowse {
    ID: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    VrstaUstrojstveneJediniceNaziv?: string;
    RadomUpravljaNaziv?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Lokacije?: string;
    Active?: boolean;
    HasPravaRadaUvida?: number;
    PrethodneUstrojstveneJedinice?: string;
    NasljedneUstrojstveneJedinice?: string;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilter
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilter');
  export interface UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseGetSelectionInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeBrowseGetSelection
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseGetSelection');
  export interface UstrojstvenaJedinicaAtTimeBrowseGetSelection {
    AtTime?: Date;
    IDs?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilter
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilter');
  export interface UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
    FilterUJPropertiesOnly?: boolean;
  }

  export const UstrojstvenaJedinicaGetAtTimeFirstNextInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaGetAtTimeFirstNext
  >('Ustrojstvo/UstrojstvenaJedinicaGetAtTimeFirstNext');
  export interface UstrojstvenaJedinicaGetAtTimeFirstNext {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckUstrojstvenaJedinicaLokacijaInfo = createStructureInfo<
    Ustrojstvo.CheckUstrojstvenaJedinicaLokacija
  >('Ustrojstvo/CheckUstrojstvenaJedinicaLokacija');
  export interface CheckUstrojstvenaJedinicaLokacija {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckUstrojstvenaJedinicaZaposleniciInfo = createStructureInfo<
    Ustrojstvo.CheckUstrojstvenaJedinicaZaposlenici
  >('Ustrojstvo/CheckUstrojstvenaJedinicaZaposlenici');
  export interface CheckUstrojstvenaJedinicaZaposlenici {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaLogInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLog
  >('Ustrojstvo/UstrojstvenaJedinicaLog');
  export interface UstrojstvenaJedinicaLog {
    ID: string;
    Created?: Date;
    ContextInfo?: string;
    UserName?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const UstrojstvenaJedinicaLogGetFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLogGetFilter
  >('Ustrojstvo/UstrojstvenaJedinicaLogGetFilter');
  export interface UstrojstvenaJedinicaLogGetFilter {
    UstrojstvenaJedincaID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeNazivSmartSerachFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeNazivSmartSerachFilter
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeNazivSmartSerachFilter');
  export interface UstrojstvenaJedinicaAtTimeNazivSmartSerachFilter {
    ActiveSinceNew?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaDetailInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaDetail
  >('Ustrojstvo/UstrojstvenaJedinicaDetail');
  export interface UstrojstvenaJedinicaDetail {
    ID: string;
    ParentID?: string;
  }

  export const UstrojstvenaJedinicaGetAllDecendentsFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaGetAllDecendentsFilter
  >('Ustrojstvo/UstrojstvenaJedinicaGetAllDecendentsFilter');
  export interface UstrojstvenaJedinicaGetAllDecendentsFilter {
    AtTime?: Date;
    UstrojstvenaJedincaID?: string;
  }

  export const ComputeUstrojstvenaJedinicaCurrentInfo = createStructureInfo<
    Ustrojstvo.ComputeUstrojstvenaJedinicaCurrent
  >('Ustrojstvo/ComputeUstrojstvenaJedinicaCurrent');
  export interface ComputeUstrojstvenaJedinicaCurrent {
    ID: string;
    USastavuID?: string;
    RadomUpravljaID?: string;
    BrojcanaOznaka?: string;
    Naziv?: string;
    Active?: boolean;
    AtTime?: Date;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinicaCurrentInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaCurrent
  >('Ustrojstvo/UstrojstvenaJedinicaCurrent');
  export interface UstrojstvenaJedinicaCurrent {
    ID: string;
    AtTime?: Date;
    BrojcanaOznaka?: string;
    Naziv?: string;
    Active?: boolean;
    USastavuID?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const TipUstrojstveneJediniceLoopupBrowseInfo = createStructureInfo<
    Ustrojstvo.TipUstrojstveneJediniceLoopupBrowse
  >('Ustrojstvo/TipUstrojstveneJediniceLoopupBrowse');
  export interface TipUstrojstveneJediniceLoopupBrowse {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const ComputeUstrojstvenaJedinicaHijerarhijaHistoryInfo = createStructureInfo<
    Ustrojstvo.ComputeUstrojstvenaJedinicaHijerarhijaHistory
  >('Ustrojstvo/ComputeUstrojstvenaJedinicaHijerarhijaHistory');
  export interface ComputeUstrojstvenaJedinicaHijerarhijaHistory {
    ID: string;
    UstrojstvenaJedinicaHistoryID?: string;
    ParentUstrojstvenaJedinicaHistoryID?: string;
    UstrojstvenaJedinicaID?: string;
    NadredjenaUstrojstvenaJedinicaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    RecursionLevel?: number;
    TopHistoryID?: string;
    Level1HistoryID?: string;
    Level2HistoryID?: string;
    Level3HistoryID?: string;
    Level4HistoryID?: string;
    Level5HistoryID?: string;
    NazivFullPath?: string;
    BrojcanaOznakaFullPath?: string;
    UstrojstvenaJedinicaHistoryNaziv?: string;
    UstrojstvenaJedinicaHistoryBrojcanaOznaka?: string;
  }

  export const UstrojstvenaJedinicaHijerarhijaHistoryInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaHijerarhijaHistory
  >('Ustrojstvo/UstrojstvenaJedinicaHijerarhijaHistory');
  export interface UstrojstvenaJedinicaHijerarhijaHistory {
    ID: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    UstrojstvenaJedinicaHistoryID?: string;
    ParentUstrojstvenaJedinicaHistoryID?: string;
    UstrojstvenaJedinicaID?: string;
    NadredjenaUstrojstvenaJedinicaID?: string;
    TopHistoryID?: string;
    Level1HistoryID?: string;
    Level2HistoryID?: string;
    Level3HistoryID?: string;
    Level4HistoryID?: string;
    Level5HistoryID?: string;
    NazivFullPath?: string;
    BrojcanaOznakaFullPath?: string;
    UstrojstvenaJedinicaHistoryNaziv?: string;
    UstrojstvenaJedinicaHistoryBrojcanaOznaka?: string;
    RecursionLevel?: number;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijelo
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijelo');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijelo {
    ID: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    IsRadnoTijelo?: boolean;
    IsUstrojstvenaJedinica?: boolean;
    UstrojstvenaJedinicaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearchInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearch
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearch');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearch {
    Pattern?: string;
    DatumPrimitka?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDateInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDate
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDate');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDate {
    DateToFilterBy?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBaseInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBase
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBase');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBase {
    ID: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookup
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookup');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookup {
    ID: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const NedodijeljeniSuradniciInfo = createStructureInfo<Ustrojstvo.NedodijeljeniSuradnici>(
    'Ustrojstvo/NedodijeljeniSuradnici'
  );
  export interface NedodijeljeniSuradnici {
    PismenoID?: string;
    PredmetID?: string;
    Pattern?: string;
  }

  export const SuradniciNaPismenimaQuickSearchInfo = createStructureInfo<
    Ustrojstvo.SuradniciNaPismenimaQuickSearch
  >('Ustrojstvo/SuradniciNaPismenimaQuickSearch');
  export interface SuradniciNaPismenimaQuickSearch {
    Pattern?: string;
    PismenoIDs?: string;
  }

  export const SuradniciNaPredmetimaQuickSearchInfo = createStructureInfo<
    Ustrojstvo.SuradniciNaPredmetimaQuickSearch
  >('Ustrojstvo/SuradniciNaPredmetimaQuickSearch');
  export interface SuradniciNaPredmetimaQuickSearch {
    Pattern?: string;
    PredmetIDs?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearchInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearch
  >('Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearch');
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearch {
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaPodredjeneInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaPodredjene
  >('Ustrojstvo/UstrojstvenaJedinicaPodredjene');
  export interface UstrojstvenaJedinicaPodredjene {
    ID: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const GetUJISvePodredjenjeInfo = createStructureInfo<Ustrojstvo.GetUJISvePodredjenje>(
    'Ustrojstvo/GetUJISvePodredjenje'
  );
  export interface GetUJISvePodredjenje {
    UJIDs?: string;
  }

  export const UstrojstvoChangesEditInfo = createStructureInfo<Ustrojstvo.UstrojstvoChangesEdit>(
    'Ustrojstvo/UstrojstvoChangesEdit'
  );
  export interface UstrojstvoChangesEdit {
    ID: string;
  }

  export const UstrojstvoCompositeInfo = createStructureInfo<Ustrojstvo.UstrojstvoComposite>(
    'Ustrojstvo/UstrojstvoComposite'
  );
  export interface UstrojstvoComposite {
    ID: string;
    NodeType?: number;
    Naziv?: string;
    BrojcanaOznaka?: string;
    USastavuID?: string;
    VrstaID?: string;
    VrstaNaziv?: string;
    Level?: number;
    BrojcanaOznakaForSort?: string;
  }

  export const UstrojstvoAtTimeInfo = createStructureInfo<Ustrojstvo.UstrojstvoAtTime>(
    'Ustrojstvo/UstrojstvoAtTime'
  );
  export interface UstrojstvoAtTime {
    AtTime?: Date;
    StartNode?: string;
    RetrivalDepth?: number;
    LokacijaID?: string;
  }

  export const UstrojstvoChangesInfo = createStructureInfo<Ustrojstvo.UstrojstvoChanges>(
    'Ustrojstvo/UstrojstvoChanges'
  );
  export interface UstrojstvoChanges {
    ID: string;
    ActiveSince?: Date;
    ActiveSinceFormated?: string;
  }

  export const ChangeUstrojstvoParentInfo = createStructureInfo<Ustrojstvo.ChangeUstrojstvoParent>(
    'Ustrojstvo/ChangeUstrojstvoParent'
  );
  export interface ChangeUstrojstvoParent {
    NodeID?: string;
    NodeType?: number;
    ParentNodeID?: string;
    AtTime?: Date;
  }

  export const RecomputeUstrojstvoInfo = createStructureInfo<Ustrojstvo.RecomputeUstrojstvo>(
    'Ustrojstvo/RecomputeUstrojstvo'
  );
  export interface RecomputeUstrojstvo {
    ID: string;
    KorisnikID?: string;
    DatumPokretanjaRecomptea?: Date;
    Napomena?: string;
    RecomputeAll?: boolean;
  }

  export const RecomputeUstrojstvoStoredProceduresToExecuteInfo = createStructureInfo<
    Ustrojstvo.RecomputeUstrojstvoStoredProceduresToExecute
  >('Ustrojstvo/RecomputeUstrojstvoStoredProceduresToExecute');
  export interface RecomputeUstrojstvoStoredProceduresToExecute {
    ID: string;
    StoredProcedureFullName?: string;
    ExecutionOrder?: number;
  }

  export const UstrojstvenaJedinicaToRecomputeInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaToRecompute
  >('Ustrojstvo/UstrojstvenaJedinicaToRecompute');
  export interface UstrojstvenaJedinicaToRecompute {
    ID: string;
  }

  export const VrstaUstrojstveneJediniceInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJedinice
  >('Ustrojstvo/VrstaUstrojstveneJedinice');
  export interface VrstaUstrojstveneJedinice {
    ID: string;
    Naziv: string;
    RadomUpravlja?: string;
  }

  export const VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilterInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilter
  >('Ustrojstvo/VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilter');
  export interface VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilter {
    Pattern?: string;
    USastavuID?: string;
    ActiveSince?: Date;
  }

  export const VrstaUstrojstveneJediniceBrowseInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceBrowse
  >('Ustrojstvo/VrstaUstrojstveneJediniceBrowse');
  export interface VrstaUstrojstveneJediniceBrowse {
    ID: string;
    Naziv?: string;
    RadomUpravlja?: string;
    PodredjeneVrsteUstrojstvenihJedinica?: string;
  }

  export const VrstaUstrojstveneJediniceExtendedInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceExtended
  >('Ustrojstvo/VrstaUstrojstveneJediniceExtended');
  export interface VrstaUstrojstveneJediniceExtended {
    ID: string;
    PodredjeneVrsteUstrojstvenihJedinica?: string;
  }

  export const VrstaUstrojstveneJediniceRelationsInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceRelations
  >('Ustrojstvo/VrstaUstrojstveneJediniceRelations');
  export interface VrstaUstrojstveneJediniceRelations {
    ID: string;
    USastavuID?: string;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const VrstaUstrojstveneJediniceRelationsBrowseInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceRelationsBrowse
  >('Ustrojstvo/VrstaUstrojstveneJediniceRelationsBrowse');
  export interface VrstaUstrojstveneJediniceRelationsBrowse {
    ID: string;
    USastavuID?: string;
    VrstaUstrojstveneJediniceNaziv?: string;
  }

  export const UpsertVrstaUstrojstveneJediniceRelationInfo = createStructureInfo<
    Ustrojstvo.UpsertVrstaUstrojstveneJediniceRelation
  >('Ustrojstvo/UpsertVrstaUstrojstveneJediniceRelation');
  export interface UpsertVrstaUstrojstveneJediniceRelation {
    ID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
    Active?: boolean;
  }

  export const TrenutniKorisnikZaAutorizacijuInfo = createStructureInfo<
    Ustrojstvo.TrenutniKorisnikZaAutorizaciju
  >('Ustrojstvo/TrenutniKorisnikZaAutorizaciju');
  export interface TrenutniKorisnikZaAutorizaciju {}

  export const TrenutniKorisnikZaLogiranjeInfo = createStructureInfo<
    Ustrojstvo.TrenutniKorisnikZaLogiranje
  >('Ustrojstvo/TrenutniKorisnikZaLogiranje');
  export interface TrenutniKorisnikZaLogiranje {}

  export const ZaposlenikKorisniciSustavaInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisniciSustava
  >('Ustrojstvo/ZaposlenikKorisniciSustava');
  export interface ZaposlenikKorisniciSustava {
    ID: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    BrojcanaOznaka?: string;
    PotpunaBrojcanaOznaka?: string;
    UserRoles?: string;
    UserName?: string;
    KorisnikSustava?: boolean;
    UserRolesFull?: string;
  }

  export const ZaposlenikKorisniciSustavaBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisniciSustavaBrowse
  >('Ustrojstvo/ZaposlenikKorisniciSustavaBrowse');
  export interface ZaposlenikKorisniciSustavaBrowse {
    ID: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UserRoles?: string;
    UserName?: string;
    KorisnikSustava?: boolean;
  }

  export const ZaposlenikKorisniciSustavaByPatternInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKorisniciSustavaByPattern
  >('Ustrojstvo/ZaposlenikKorisniciSustavaByPattern');
  export interface ZaposlenikKorisniciSustavaByPattern {
    Pattern?: string;
  }

  export const Zaposlenik_ChangesInfo = createStructureInfo<Ustrojstvo.Zaposlenik_Changes>(
    'Ustrojstvo/Zaposlenik_Changes'
  );
  export interface Zaposlenik_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    Active?: boolean;
    PripadaID?: string;
    LokacijaID?: string;
    Oib?: string;
    VrstaZaposlenikaID?: string;
  }

  export const ZaposlenikKontaktDetaljInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKontaktDetalj
  >('Ustrojstvo/ZaposlenikKontaktDetalj');
  export interface ZaposlenikKontaktDetalj {
    ID: string;
    ZaposlenikID: string;
    VrstaKontaktDetaljaID: string;
    Vrijednost: string;
    Oznaka?: string;
  }

  export const ZaposlenikKontaktDetaljBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikKontaktDetaljBrowse
  >('Ustrojstvo/ZaposlenikKontaktDetaljBrowse');
  export interface ZaposlenikKontaktDetaljBrowse {
    ID: string;
    Vrijednost?: string;
    Oznaka?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikExtendedInfo = createStructureInfo<Ustrojstvo.ZaposlenikExtended>(
    'Ustrojstvo/ZaposlenikExtended'
  );
  export interface ZaposlenikExtended {
    ID: string;
    BrOznakaNazivUJNaziv?: string;
    ImePrezime?: string;
    PotpunaBrojcanaOznaka?: string;
    UJNaziv?: string;
    Active?: boolean;
  }

  export const ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearchInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearch
  >('Ustrojstvo/ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearch');
  export interface ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearch {
    Pattern?: string;
  }

  export const VrstaZaposlenikaInfo = createStructureInfo<Ustrojstvo.VrstaZaposlenika>(
    'Ustrojstvo/VrstaZaposlenika'
  );
  export interface VrstaZaposlenika {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const VrstaZaposlenikaBrowseInfo = createStructureInfo<Ustrojstvo.VrstaZaposlenikaBrowse>(
    'Ustrojstvo/VrstaZaposlenikaBrowse'
  );
  export interface VrstaZaposlenikaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const ZaposlenikAtTimeInfoInfo = createStructureInfo<Ustrojstvo.ZaposlenikAtTimeInfo>(
    'Ustrojstvo/ZaposlenikAtTimeInfo'
  );
  export interface ZaposlenikAtTimeInfo {
    ID: string;
    RadnaTijela?: string;
  }

  export const ZaposlenikAtTimeInfoFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikAtTimeInfoFilter
  >('Ustrojstvo/ZaposlenikAtTimeInfoFilter');
  export interface ZaposlenikAtTimeInfoFilter {
    AtTime?: Date;
    ZaposlenikID?: string;
  }

  export const ZaposlenikBrowseBaseInfo = createStructureInfo<Ustrojstvo.ZaposlenikBrowseBase>(
    'Ustrojstvo/ZaposlenikBrowseBase'
  );
  export interface ZaposlenikBrowseBase {
    ID: string;
    VrstaZaposlenikaID?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    PripadaID?: string;
    LokacijaID?: string;
    RadnaTijelaZaposlenika?: string;
    VrstaZaposlenikaNaziv?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    KorisnikSustava?: boolean;
    UserName?: string;
    UserRoles?: string;
    HasPravaRadaUvida?: number;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    KorisnickeGrupe?: string;
    Oib?: string;
  }

  export const ZaposlenikBrowseInfo = createStructureInfo<Ustrojstvo.ZaposlenikBrowse>(
    'Ustrojstvo/ZaposlenikBrowse'
  );
  export interface ZaposlenikBrowse {
    ID: string;
    VrstaZaposlenikaID?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    PripadaID?: string;
    LokacijaID?: string;
    RadnaTijelaZaposlenika?: string;
    VrstaZaposlenikaNaziv?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    KorisnikSustava?: boolean;
    UserName?: string;
    UserRoles?: string;
    HasPravaRadaUvida?: number;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    KorisnickeGrupe?: string;
    Oib?: string;
    StupanjTajnosti?: string;
  }

  export const RadnoTijeloZaposlenikInfo = createStructureInfo<Ustrojstvo.RadnoTijeloZaposlenik>(
    'Ustrojstvo/RadnoTijeloZaposlenik'
  );
  export interface RadnoTijeloZaposlenik {
    ID: string;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CheckZaposlenikLokacijaAtTimeInfo = createStructureInfo<
    Ustrojstvo.CheckZaposlenikLokacijaAtTime
  >('Ustrojstvo/CheckZaposlenikLokacijaAtTime');
  export interface CheckZaposlenikLokacijaAtTime {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckZaposlenikAtTimeInfo = createStructureInfo<Ustrojstvo.CheckZaposlenikAtTime>(
    'Ustrojstvo/CheckZaposlenikAtTime'
  );
  export interface CheckZaposlenikAtTime {
    Zaposlenik: string;
  }

  export const UpsertZaposlenikHistoryInfo = createStructureInfo<
    Ustrojstvo.UpsertZaposlenikHistory
  >('Ustrojstvo/UpsertZaposlenikHistory');
  export interface UpsertZaposlenikHistory {
    Zaposlenik: string;
    ActiveUntil?: Date;
  }

  export const CheckRadnoTijeloZaposlenikInfo = createStructureInfo<
    Ustrojstvo.CheckRadnoTijeloZaposlenik
  >('Ustrojstvo/CheckRadnoTijeloZaposlenik');
  export interface CheckRadnoTijeloZaposlenik {
    ZaposlenikID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloZaposlenikInfo = createStructureInfo<
    Ustrojstvo.UpsertRadnoTijeloZaposlenik
  >('Ustrojstvo/UpsertRadnoTijeloZaposlenik');
  export interface UpsertRadnoTijeloZaposlenik {
    ZaposlenikID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const CheckZaposlenikInfo = createStructureInfo<Ustrojstvo.CheckZaposlenik>(
    'Ustrojstvo/CheckZaposlenik'
  );
  export interface CheckZaposlenik {
    ZaposlenikID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikHistoryChangesInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikHistoryChanges
  >('Ustrojstvo/ZaposlenikHistoryChanges');
  export interface ZaposlenikHistoryChanges {
    ID: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
    PripadaID?: string;
  }

  export const ZaposlenikHistoryChangesLookupInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikHistoryChangesLookup
  >('Ustrojstvo/ZaposlenikHistoryChangesLookup');
  export interface ZaposlenikHistoryChangesLookup {
    ID: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const ZaposlenikHistoryLookupSmartSearchFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikHistoryLookupSmartSearchFilter
  >('Ustrojstvo/ZaposlenikHistoryLookupSmartSearchFilter');
  export interface ZaposlenikHistoryLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const LokacijaZaposlenikaLookupFilterInfo = createStructureInfo<
    Ustrojstvo.LokacijaZaposlenikaLookupFilter
  >('Ustrojstvo/LokacijaZaposlenikaLookupFilter');
  export interface LokacijaZaposlenikaLookupFilter {
    ActiveSince?: Date;
    PripadaID?: string;
  }

  export const ZaposlenikLookupAtTimeInfo = createStructureInfo<Ustrojstvo.ZaposlenikLookupAtTime>(
    'Ustrojstvo/ZaposlenikLookupAtTime'
  );
  export interface ZaposlenikLookupAtTime {
    ID: string;
    ImeIPrezime?: string;
    UstrojstvenaJedinica?: string;
    BrojcanaOznaka?: string;
    PotpunaBrojcanaOznaka?: string;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const ZaposlenikLookupAtTimeGetFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikLookupAtTimeGetFilter
  >('Ustrojstvo/ZaposlenikLookupAtTimeGetFilter');
  export interface ZaposlenikLookupAtTimeGetFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const ZaposlenikLookupAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikLookupAtTimeFilter
  >('Ustrojstvo/ZaposlenikLookupAtTimeFilter');
  export interface ZaposlenikLookupAtTimeFilter {
    AtTime?: Date;
  }

  export const ZaposlenikLookupAtTimeQuickSearchFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikLookupAtTimeQuickSearchFilter
  >('Ustrojstvo/ZaposlenikLookupAtTimeQuickSearchFilter');
  export interface ZaposlenikLookupAtTimeQuickSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
  }

  export const ZaposlenikLogInfo = createStructureInfo<Ustrojstvo.ZaposlenikLog>(
    'Ustrojstvo/ZaposlenikLog'
  );
  export interface ZaposlenikLog {
    ID: string;
    Created?: Date;
    ContextInfo?: string;
    UserName?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const ZaposlenikLogGetFilterInfo = createStructureInfo<Ustrojstvo.ZaposlenikLogGetFilter>(
    'Ustrojstvo/ZaposlenikLogGetFilter'
  );
  export interface ZaposlenikLogGetFilter {
    ZaposlenikID?: string;
  }

  export const CheckZaposlenikUstrojstvenaJedinicaInfo = createStructureInfo<
    Ustrojstvo.CheckZaposlenikUstrojstvenaJedinica
  >('Ustrojstvo/CheckZaposlenikUstrojstvenaJedinica');
  export interface CheckZaposlenikUstrojstvenaJedinica {
    AtTime?: Date;
    ID?: string;
  }

  export const SetUserNameForZaposlenikInfo = createStructureInfo<
    Ustrojstvo.SetUserNameForZaposlenik
  >('Ustrojstvo/SetUserNameForZaposlenik');
  export interface SetUserNameForZaposlenik {
    ZaposlenikID?: string;
    UserName?: string;
    ZupItUsername?: string;
  }

  export const SetZaposlenikAsKorisnikSustavaInfo = createStructureInfo<
    Ustrojstvo.SetZaposlenikAsKorisnikSustava
  >('Ustrojstvo/SetZaposlenikAsKorisnikSustava');
  export interface SetZaposlenikAsKorisnikSustava {
    ZaposlenikID?: string;
  }

  export const UnsetZaposlenikAsKorisnikSustavaInfo = createStructureInfo<
    Ustrojstvo.UnsetZaposlenikAsKorisnikSustava
  >('Ustrojstvo/UnsetZaposlenikAsKorisnikSustava');
  export interface UnsetZaposlenikAsKorisnikSustava {
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvida
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida');
  export interface SluzbenikUstrojstveneJediniceSPravomUvida {
    ID: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Napomena?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UpsertZaposlenikPravoUvidaInfo = createStructureInfo<
    Ustrojstvo.UpsertZaposlenikPravoUvida
  >('Ustrojstvo/UpsertZaposlenikPravoUvida');
  export interface UpsertZaposlenikPravoUvida {
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Napomena?: string;
  }

  export const ComputeZaposlenikCurrentInfo = createStructureInfo<
    Ustrojstvo.ComputeZaposlenikCurrent
  >('Ustrojstvo/ComputeZaposlenikCurrent');
  export interface ComputeZaposlenikCurrent {
    ID: string;
    Ime?: string;
    Prezime?: string;
    PripadaID?: string;
    BrojcanaOznaka?: string;
    Active?: boolean;
    UserName?: string;
    VrstaZaposlenikaID?: string;
    LokacijaID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikCurrentInfo = createStructureInfo<Ustrojstvo.ZaposlenikCurrent>(
    'Ustrojstvo/ZaposlenikCurrent'
  );
  export interface ZaposlenikCurrent {
    ID: string;
    AtTime?: Date;
    UserName?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    Active?: boolean;
    PripadaID?: string;
    VrstaZaposlenikaID?: string;
    LokacijaID?: string;
  }

  export const CanAccessAllInfo = createStructureInfo<Ustrojstvo.CanAccessAll>(
    'Ustrojstvo/CanAccessAll'
  );
  export interface CanAccessAll {
    ID: string;
  }

  export const ZaposlenikRoleInfo = createStructureInfo<Ustrojstvo.ZaposlenikRole>(
    'Ustrojstvo/ZaposlenikRole'
  );
  export interface ZaposlenikRole {
    ID: string;
    UserName?: string;
    CanReadAll?: boolean;
    CanEditAll?: boolean;
    CanRemoveAll?: boolean;
    CanCreateAll?: boolean;
    CanReadEditRemoveCreateAll?: boolean;
  }

  export const ZaposlenikRoleBrowseInfo = createStructureInfo<Ustrojstvo.ZaposlenikRoleBrowse>(
    'Ustrojstvo/ZaposlenikRoleBrowse'
  );
  export interface ZaposlenikRoleBrowse {
    ID: string;
    UserName?: string;
  }

  export const ZaposlenikPravaRadaUvidaInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaUvida
  >('Ustrojstvo/ZaposlenikPravaRadaUvida');
  export interface ZaposlenikPravaRadaUvida {
    ID: string;
    OvlasteniZaposlenikID: string;
    ZaposlenikID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    Napomena?: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    IsPravoRadaIliUvida?: boolean;
    Active?: boolean;
  }

  export const GetOvlastenjaForCurrentUserInfo = createStructureInfo<
    Ustrojstvo.GetOvlastenjaForCurrentUser
  >('Ustrojstvo/GetOvlastenjaForCurrentUser');
  export interface GetOvlastenjaForCurrentUser {
    IsPravoRadaIliUvida?: boolean;
  }

  export const ZaposlenikPravaRadaUvidaExtInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaUvidaExt
  >('Ustrojstvo/ZaposlenikPravaRadaUvidaExt');
  export interface ZaposlenikPravaRadaUvidaExt {
    ID: string;
    IsVrijediOdValid?: boolean;
    IsValid?: boolean;
    IsPravoRadaIliUvida?: boolean;
    OvlasteniZaposlenikID?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikPravaRadaUvidaBrowseInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikPravaRadaUvidaBrowse
  >('Ustrojstvo/ZaposlenikPravaRadaUvidaBrowse');
  export interface ZaposlenikPravaRadaUvidaBrowse {
    ID: string;
    OvlasteniZaposlenikID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    Active?: boolean;
    IsPravoRadaIliUvida?: boolean;
    ZaposlenikIme?: string;
    ZaposlenikPrezime?: string;
    ZaposlenikBrojcanaOznaka?: string;
    Kreirao?: string;
    Obrisao?: string;
    IsValid?: boolean;
  }

  export const ComputePravoRadaZaposlenikaPoPredmetimaInfo = createStructureInfo<
    Ustrojstvo.ComputePravoRadaZaposlenikaPoPredmetima
  >('Ustrojstvo/ComputePravoRadaZaposlenikaPoPredmetima');
  export interface ComputePravoRadaZaposlenikaPoPredmetima {
    ID: string;
    ZaposlenikID?: string;
    PredmetID?: string;
    IsPravoRadaIliUvida?: boolean;
  }

  export const PravoRadaZaposlenikaPoPredmetimaInfo = createStructureInfo<
    Ustrojstvo.PravoRadaZaposlenikaPoPredmetima
  >('Ustrojstvo/PravoRadaZaposlenikaPoPredmetima');
  export interface PravoRadaZaposlenikaPoPredmetima {
    ID: string;
    IsPravoRadaIliUvida?: boolean;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const ComputePravoRadaZaposlenikaPoDijeljenimPredmetimaInfo = createStructureInfo<
    Ustrojstvo.ComputePravoRadaZaposlenikaPoDijeljenimPredmetima
  >('Ustrojstvo/ComputePravoRadaZaposlenikaPoDijeljenimPredmetima');
  export interface ComputePravoRadaZaposlenikaPoDijeljenimPredmetima {
    ID: string;
    ZaposlenikID?: string;
    PredmetID?: string;
    IsPravoRadaIliUvida?: boolean;
  }

  export const PravoRadaZaposlenikaPoDijeljenimPredmetimaInfo = createStructureInfo<
    Ustrojstvo.PravoRadaZaposlenikaPoDijeljenimPredmetima
  >('Ustrojstvo/PravoRadaZaposlenikaPoDijeljenimPredmetima');
  export interface PravoRadaZaposlenikaPoDijeljenimPredmetima {
    ID: string;
    IsPravoRadaIliUvida?: boolean;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const ComputePravaRadaUvidaPoDijeljenimPismenimaInfo = createStructureInfo<
    Ustrojstvo.ComputePravaRadaUvidaPoDijeljenimPismenima
  >('Ustrojstvo/ComputePravaRadaUvidaPoDijeljenimPismenima');
  export interface ComputePravaRadaUvidaPoDijeljenimPismenima {
    ID: string;
    ZaposlenikID?: string;
    PismenoID?: string;
    IsPravoRadaIliUvida?: boolean;
  }

  export const PravoRadaZaposlenikaPoDijeljenimPismenimaInfo = createStructureInfo<
    Ustrojstvo.PravoRadaZaposlenikaPoDijeljenimPismenima
  >('Ustrojstvo/PravoRadaZaposlenikaPoDijeljenimPismenima');
  export interface PravoRadaZaposlenikaPoDijeljenimPismenima {
    ID: string;
    IsPravoRadaIliUvida?: boolean;
    PismenoID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloLookupInfo = createStructureInfo<Ustrojstvo.RadnoTijeloLookup>(
    'Ustrojstvo/RadnoTijeloLookup'
  );
  export interface RadnoTijeloLookup {
    ID: string;
    Naziv?: string;
  }

  export const VrstaRadnogTijelaLookupInfo = createStructureInfo<
    Ustrojstvo.VrstaRadnogTijelaLookup
  >('Ustrojstvo/VrstaRadnogTijelaLookup');
  export interface VrstaRadnogTijelaLookup {
    ID: string;
    Naziv?: string;
  }

  export const UstrojstvenaJedinicaLookupInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLookup
  >('Ustrojstvo/UstrojstvenaJedinicaLookup');
  export interface UstrojstvenaJedinicaLookup {
    ID: string;
    Naziv?: string;
  }

  export const VrstaUstrojstveneJediniceLookupInfo = createStructureInfo<
    Ustrojstvo.VrstaUstrojstveneJediniceLookup
  >('Ustrojstvo/VrstaUstrojstveneJediniceLookup');
  export interface VrstaUstrojstveneJediniceLookup {
    ID: string;
    Naziv?: string;
  }

  export const ZaposlenikLookupInfo = createStructureInfo<Ustrojstvo.ZaposlenikLookup>(
    'Ustrojstvo/ZaposlenikLookup'
  );
  export interface ZaposlenikLookup {
    ID: string;
    Ime?: string;
    Prezime?: string;
  }

  export const VrstaZaposlenikaLookupInfo = createStructureInfo<Ustrojstvo.VrstaZaposlenikaLookup>(
    'Ustrojstvo/VrstaZaposlenikaLookup'
  );
  export interface VrstaZaposlenikaLookup {
    ID: string;
    Naziv?: string;
  }

  export const ComputeUstrojstvenaJedinicaUSastavuHierarchyInfo = createStructureInfo<
    Ustrojstvo.ComputeUstrojstvenaJedinicaUSastavuHierarchy
  >('Ustrojstvo/ComputeUstrojstvenaJedinicaUSastavuHierarchy');
  export interface ComputeUstrojstvenaJedinicaUSastavuHierarchy {
    ID: string;
    LeftIndex?: number;
    RightIndex?: number;
    Level?: number;
  }

  export const UstrojstvenaJedinicaUSastavuHierarchyInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaUSastavuHierarchy
  >('Ustrojstvo/UstrojstvenaJedinicaUSastavuHierarchy');
  export interface UstrojstvenaJedinicaUSastavuHierarchy {
    ID: string;
    LeftIndex?: number;
    RightIndex?: number;
    Level?: number;
  }

  export const USastavuHierarchyAncestorsInfo = createStructureInfo<
    Ustrojstvo.USastavuHierarchyAncestors
  >('Ustrojstvo/USastavuHierarchyAncestors');
  export interface USastavuHierarchyAncestors {
    ID?: string;
  }

  export const USastavuHierarchyDescendantsInfo = createStructureInfo<
    Ustrojstvo.USastavuHierarchyDescendants
  >('Ustrojstvo/USastavuHierarchyDescendants');
  export interface USastavuHierarchyDescendants {
    ID?: string;
  }

  export const Oib_Mod11_10FilterInfo = createStructureInfo<Ustrojstvo.Oib_Mod11_10Filter>(
    'Ustrojstvo/Oib_Mod11_10Filter'
  );
  export interface Oib_Mod11_10Filter {}

  export const Oib_RegExMatchFilterInfo = createStructureInfo<Ustrojstvo.Oib_RegExMatchFilter>(
    'Ustrojstvo/Oib_RegExMatchFilter'
  );
  export interface Oib_RegExMatchFilter {}

  export const UstrojstvenaJedinica_AllowedRelation_USastavuInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_AllowedRelation_USastavu
  >('Ustrojstvo/UstrojstvenaJedinica_AllowedRelation_USastavu');
  export interface UstrojstvenaJedinica_AllowedRelation_USastavu {
    ID: string;
    VrstaUstrojstveneJediniceID: string;
    USastavuVrstaUstrojstveneJediniceID: string;
  }

  export const Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavuInfo = createStructureInfo<
    Ustrojstvo.Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavu
  >('Ustrojstvo/Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavu');
  export interface Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavu {
    ID: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuVrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinica_AllowedIndirectRelation_USastavuInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_AllowedIndirectRelation_USastavu
  >('Ustrojstvo/UstrojstvenaJedinica_AllowedIndirectRelation_USastavu');
  export interface UstrojstvenaJedinica_AllowedIndirectRelation_USastavu {
    ID: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuVrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinica_IsAllowedRelation_USastavuInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_IsAllowedRelation_USastavu
  >('Ustrojstvo/UstrojstvenaJedinica_IsAllowedRelation_USastavu');
  export interface UstrojstvenaJedinica_IsAllowedRelation_USastavu {
    ID: string;
    Allowed?: boolean;
    Reason?: string;
  }

  export const ValidForJeAktivanZaposlenikInfo = createStructureInfo<
    Ustrojstvo.ValidForJeAktivanZaposlenik
  >('Ustrojstvo/ValidForJeAktivanZaposlenik');
  export interface ValidForJeAktivanZaposlenik {}

  export const VrijediDoManjeOdVrijediOdInfo = createStructureInfo<
    Ustrojstvo.VrijediDoManjeOdVrijediOd
  >('Ustrojstvo/VrijediDoManjeOdVrijediOd');
  export interface VrijediDoManjeOdVrijediOd {}

  export const VrijediOdManjeOdDatumKreiranjaInfo = createStructureInfo<
    Ustrojstvo.VrijediOdManjeOdDatumKreiranja
  >('Ustrojstvo/VrijediOdManjeOdDatumKreiranja');
  export interface VrijediOdManjeOdDatumKreiranja {}

  export const DupliZapisInfo = createStructureInfo<Ustrojstvo.DupliZapis>('Ustrojstvo/DupliZapis');
  export interface DupliZapis {}

  export const IstiPrethodnikINasljednikInfo = createStructureInfo<
    Ustrojstvo.IstiPrethodnikINasljednik
  >('Ustrojstvo/IstiPrethodnikINasljednik');
  export interface IstiPrethodnikINasljednik {}

  export const ValidateUserNameInfo = createStructureInfo<Ustrojstvo.ValidateUserName>(
    'Ustrojstvo/ValidateUserName'
  );
  export interface ValidateUserName {}

  export const ValidateUniqueOibInfo = createStructureInfo<Ustrojstvo.ValidateUniqueOib>(
    'Ustrojstvo/ValidateUniqueOib'
  );
  export interface ValidateUniqueOib {}

  export const NotAllowedRelations_USastavuInfo = createStructureInfo<
    Ustrojstvo.NotAllowedRelations_USastavu
  >('Ustrojstvo/NotAllowedRelations_USastavu');
  export interface NotAllowedRelations_USastavu {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<Ustrojstvo.SystemRequiredKreirao>(
    'Ustrojstvo/SystemRequiredKreirao'
  );
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredDatumKreiranja
  >('Ustrojstvo/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDodijelioInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredDodijelio
  >('Ustrojstvo/SystemRequiredDodijelio');
  export interface SystemRequiredDodijelio {}

  export const SystemRequiredDatumPokretanjaRecompteaInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredDatumPokretanjaRecomptea
  >('Ustrojstvo/SystemRequiredDatumPokretanjaRecomptea');
  export interface SystemRequiredDatumPokretanjaRecomptea {}

  export const SystemRequiredIsPravoRadaIliUvidaInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredIsPravoRadaIliUvida
  >('Ustrojstvo/SystemRequiredIsPravoRadaIliUvida');
  export interface SystemRequiredIsPravoRadaIliUvida {}

  export const SystemRequiredCtxIdInfo = createStructureInfo<Ustrojstvo.SystemRequiredCtxId>(
    'Ustrojstvo/SystemRequiredCtxId'
  );
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveInfo = createStructureInfo<Ustrojstvo.SystemRequiredActive>(
    'Ustrojstvo/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}

  export const SystemRequiredGrupaSuradnikaInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredGrupaSuradnika
  >('Ustrojstvo/SystemRequiredGrupaSuradnika');
  export interface SystemRequiredGrupaSuradnika {}

  export const SystemRequiredZaposlenikInfo = createStructureInfo<
    Ustrojstvo.SystemRequiredZaposlenik
  >('Ustrojstvo/SystemRequiredZaposlenik');
  export interface SystemRequiredZaposlenik {}

  export const RadnoTijeloOvlasteniSluzbenici_ChangesInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbenici_Changes
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_Changes');
  export interface RadnoTijeloOvlasteniSluzbenici_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const RadnoTijeloOvlasteniSluzbenici_HistoryInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbenici_History
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_History');
  export interface RadnoTijeloOvlasteniSluzbenici_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const RadnoTijeloOvlasteniSluzbeniciAtTimeInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbeniciAtTime
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbeniciAtTime');
  export interface RadnoTijeloOvlasteniSluzbeniciAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    RadnoTijeloActive?: boolean;
    OvlasteniSluzbenikActive?: boolean;
  }

  export const RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilter
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilter');
  export interface RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTime
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTime');
  export interface GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTime {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriod
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriod');
  export interface GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriod {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloKontakt_ChangesInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloKontakt_Changes
  >('Ustrojstvo/RadnoTijeloKontakt_Changes');
  export interface RadnoTijeloKontakt_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const RadnoTijeloKontakt_HistoryInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloKontakt_History
  >('Ustrojstvo/RadnoTijeloKontakt_History');
  export interface RadnoTijeloKontakt_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const RadnoTijeloKontaktAtTimeInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloKontaktAtTime
  >('Ustrojstvo/RadnoTijeloKontaktAtTime');
  export interface RadnoTijeloKontaktAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
    RadnoTijeloActive?: boolean;
  }

  export const RadnoTijeloKontaktGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloKontaktGetEntityAtTimeFilter
  >('Ustrojstvo/RadnoTijeloKontaktGetEntityAtTimeFilter');
  export interface RadnoTijeloKontaktGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const GeneratedUpsertRadnoTijeloKontaktAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloKontaktAtTime
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloKontaktAtTime');
  export interface GeneratedUpsertRadnoTijeloKontaktAtTime {
    RadnoTijeloID?: string;
    KontaktID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloKontaktForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloKontaktForPeriod
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloKontaktForPeriod');
  export interface GeneratedUpsertRadnoTijeloKontaktForPeriod {
    RadnoTijeloID?: string;
    KontaktID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaLokacija_ChangesInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacija_Changes
  >('Ustrojstvo/UstrojstvenaJedinicaLokacija_Changes');
  export interface UstrojstvenaJedinicaLokacija_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
  }

  export const UstrojstvenaJedinicaLokacija_HistoryInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacija_History
  >('Ustrojstvo/UstrojstvenaJedinicaLokacija_History');
  export interface UstrojstvenaJedinicaLokacija_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
  }

  export const UstrojstvenaJedinicaLokacijaAtTimeInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacijaAtTime
  >('Ustrojstvo/UstrojstvenaJedinicaLokacijaAtTime');
  export interface UstrojstvenaJedinicaLokacijaAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    LokacijaActive?: boolean;
    UstrojstvenaJedinicaActive?: boolean;
  }

  export const UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilter
  >('Ustrojstvo/UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilter');
  export interface UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTime
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTime');
  export interface GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTime {
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriod
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriod');
  export interface GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriod {
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenik_Changes
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_Changes');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenik_History
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_History');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenikAtTime
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenikAtTime');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenikAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    UstrojstvenaJedinicaActive?: boolean;
    OvlasteniSluzbenikActive?: boolean;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilter
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilter');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTime
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTime');
  export interface GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTime {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriod
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriod');
  export interface GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriod {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const RadnoTijeloZaposlenik_ChangesInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloZaposlenik_Changes
  >('Ustrojstvo/RadnoTijeloZaposlenik_Changes');
  export interface RadnoTijeloZaposlenik_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloZaposlenik_HistoryInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloZaposlenik_History
  >('Ustrojstvo/RadnoTijeloZaposlenik_History');
  export interface RadnoTijeloZaposlenik_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloZaposlenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloZaposlenikAtTime
  >('Ustrojstvo/RadnoTijeloZaposlenikAtTime');
  export interface RadnoTijeloZaposlenikAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    RadnoTijeloActive?: boolean;
    ZaposlenikActive?: boolean;
  }

  export const RadnoTijeloZaposlenikGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloZaposlenikGetEntityAtTimeFilter
  >('Ustrojstvo/RadnoTijeloZaposlenikGetEntityAtTimeFilter');
  export interface RadnoTijeloZaposlenikGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const GeneratedUpsertRadnoTijeloZaposlenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloZaposlenikAtTime
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloZaposlenikAtTime');
  export interface GeneratedUpsertRadnoTijeloZaposlenikAtTime {
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloZaposlenikForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloZaposlenikForPeriod
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloZaposlenikForPeriod');
  export interface GeneratedUpsertRadnoTijeloZaposlenikForPeriod {
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_ChangesInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvida_Changes
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_Changes');
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_HistoryInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvida_History
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_History');
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaAtTimeInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvidaAtTime
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvidaAtTime');
  export interface SluzbenikUstrojstveneJediniceSPravomUvidaAtTime {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaActive?: boolean;
    ZaposlenikActive?: boolean;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilter
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilter');
  export interface SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTime
  >('Ustrojstvo/GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTime');
  export interface GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTime {
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod
  >('Ustrojstvo/GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod');
  export interface GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod {
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const Zaposlenik_HistoryInfo = createStructureInfo<Ustrojstvo.Zaposlenik_History>(
    'Ustrojstvo/Zaposlenik_History'
  );
  export interface Zaposlenik_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    Active?: boolean;
    PripadaID?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
    Oib?: string;
  }

  export const ZaposlenikAtTimeInfo = createStructureInfo<Ustrojstvo.ZaposlenikAtTime>(
    'Ustrojstvo/ZaposlenikAtTime'
  );
  export interface ZaposlenikAtTime {
    ID: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    PripadaID?: string;
    LokacijaID?: string;
    Oib?: string;
    VrstaZaposlenikaID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const ZaposlenikActiveUntilInfo = createStructureInfo<Ustrojstvo.ZaposlenikActiveUntil>(
    'Ustrojstvo/ZaposlenikActiveUntil'
  );
  export interface ZaposlenikActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const ZaposlenikGetActiveUntilFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikGetActiveUntilFilter
  >('Ustrojstvo/ZaposlenikGetActiveUntilFilter');
  export interface ZaposlenikGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikGetEntityAtTimeFilter
  >('Ustrojstvo/ZaposlenikGetEntityAtTimeFilter');
  export interface ZaposlenikGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const ZaposlenikAtTimeGetSelectionFilterInfo = createStructureInfo<
    Ustrojstvo.ZaposlenikAtTimeGetSelectionFilter
  >('Ustrojstvo/ZaposlenikAtTimeGetSelectionFilter');
  export interface ZaposlenikAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertZaposlenikAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertZaposlenikAtTime
  >('Ustrojstvo/GeneratedUpsertZaposlenikAtTime');
  export interface GeneratedUpsertZaposlenikAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertZaposlenikForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertZaposlenikForPeriod
  >('Ustrojstvo/GeneratedUpsertZaposlenikForPeriod');
  export interface GeneratedUpsertZaposlenikForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinica_ChangesInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_Changes
  >('Ustrojstvo/UstrojstvenaJedinica_Changes');
  export interface UstrojstvenaJedinica_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinica_HistoryInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_History
  >('Ustrojstvo/UstrojstvenaJedinica_History');
  export interface UstrojstvenaJedinica_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTime
  >('Ustrojstvo/UstrojstvenaJedinicaAtTime');
  export interface UstrojstvenaJedinicaAtTime {
    ID: string;
    ActiveUntil?: Date;
    EntityID?: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaActiveUntilInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaActiveUntil
  >('Ustrojstvo/UstrojstvenaJedinicaActiveUntil');
  export interface UstrojstvenaJedinicaActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaGetActiveUntilFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaGetActiveUntilFilter
  >('Ustrojstvo/UstrojstvenaJedinicaGetActiveUntilFilter');
  export interface UstrojstvenaJedinicaGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const UstrojstvenaJedinicaGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaGetEntityAtTimeFilter
  >('Ustrojstvo/UstrojstvenaJedinicaGetEntityAtTimeFilter');
  export interface UstrojstvenaJedinicaGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeGetSelectionFilterInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaAtTimeGetSelectionFilter
  >('Ustrojstvo/UstrojstvenaJedinicaAtTimeGetSelectionFilter');
  export interface UstrojstvenaJedinicaAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaAtTime
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaAtTime');
  export interface GeneratedUpsertUstrojstvenaJedinicaAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertUstrojstvenaJedinicaForPeriod
  >('Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaForPeriod');
  export interface GeneratedUpsertUstrojstvenaJedinicaForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijelo_HistoryInfo = createStructureInfo<Ustrojstvo.RadnoTijelo_History>(
    'Ustrojstvo/RadnoTijelo_History'
  );
  export interface RadnoTijelo_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Naziv: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
  }

  export const RadnoTijeloAtTimeInfo = createStructureInfo<Ustrojstvo.RadnoTijeloAtTime>(
    'Ustrojstvo/RadnoTijeloAtTime'
  );
  export interface RadnoTijeloAtTime {
    ID: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Naziv: string;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloActiveUntilInfo = createStructureInfo<Ustrojstvo.RadnoTijeloActiveUntil>(
    'Ustrojstvo/RadnoTijeloActiveUntil'
  );
  export interface RadnoTijeloActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloGetActiveUntilFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloGetActiveUntilFilter
  >('Ustrojstvo/RadnoTijeloGetActiveUntilFilter');
  export interface RadnoTijeloGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const RadnoTijeloGetEntityAtTimeFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloGetEntityAtTimeFilter
  >('Ustrojstvo/RadnoTijeloGetEntityAtTimeFilter');
  export interface RadnoTijeloGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const RadnoTijeloAtTimeGetSelectionFilterInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloAtTimeGetSelectionFilter
  >('Ustrojstvo/RadnoTijeloAtTimeGetSelectionFilter');
  export interface RadnoTijeloAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertRadnoTijeloAtTimeInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloAtTime
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloAtTime');
  export interface GeneratedUpsertRadnoTijeloAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertRadnoTijeloForPeriodInfo = createStructureInfo<
    Ustrojstvo.GeneratedUpsertRadnoTijeloForPeriod
  >('Ustrojstvo/GeneratedUpsertRadnoTijeloForPeriod');
  export interface GeneratedUpsertRadnoTijeloForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntil
  >('Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntil');
  export interface RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloKontakt_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloKontakt_ChangesActiveUntil
  >('Ustrojstvo/RadnoTijeloKontakt_ChangesActiveUntil');
  export interface RadnoTijeloKontakt_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaLokacija_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaLokacija_ChangesActiveUntil
  >('Ustrojstvo/UstrojstvenaJedinicaLokacija_ChangesActiveUntil');
  export interface UstrojstvenaJedinicaLokacija_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntil
  >('Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntil');
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloZaposlenik_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.RadnoTijeloZaposlenik_ChangesActiveUntil
  >('Ustrojstvo/RadnoTijeloZaposlenik_ChangesActiveUntil');
  export interface RadnoTijeloZaposlenik_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntil
  >('Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntil');
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const Zaposlenik_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.Zaposlenik_ChangesActiveUntil
  >('Ustrojstvo/Zaposlenik_ChangesActiveUntil');
  export interface Zaposlenik_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinica_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.UstrojstvenaJedinica_ChangesActiveUntil
  >('Ustrojstvo/UstrojstvenaJedinica_ChangesActiveUntil');
  export interface UstrojstvenaJedinica_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijelo_ChangesActiveUntilInfo = createStructureInfo<
    Ustrojstvo.RadnoTijelo_ChangesActiveUntil
  >('Ustrojstvo/RadnoTijelo_ChangesActiveUntil');
  export interface RadnoTijelo_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const SystemRequiredEntityInfo = createStructureInfo<Ustrojstvo.SystemRequiredEntity>(
    'Ustrojstvo/SystemRequiredEntity'
  );
  export interface SystemRequiredEntity {}
}

export module KorisnickaPolja {
  export const PredmetInfo = createStructureInfo<KorisnickaPolja.Predmet>(
    'KorisnickaPolja/Predmet'
  );
  export interface Predmet {
    ID: string;
  }

  export const PismenoInfo = createStructureInfo<KorisnickaPolja.Pismeno>(
    'KorisnickaPolja/Pismeno'
  );
  export interface Pismeno {
    ID: string;
  }

  export const PrilogInfo = createStructureInfo<KorisnickaPolja.Prilog>('KorisnickaPolja/Prilog');
  export interface Prilog {
    ID: string;
  }

  export const OsnovniSubjektInfo = createStructureInfo<KorisnickaPolja.OsnovniSubjekt>(
    'KorisnickaPolja/OsnovniSubjekt'
  );
  export interface OsnovniSubjekt {
    ID: string;
  }

  export const DeployedConfInfo = createStructureInfo<KorisnickaPolja.DeployedConf>(
    'KorisnickaPolja/DeployedConf'
  );
  export interface DeployedConf {
    ID: string;
    Json: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const DeployedConfBrowseInfo = createStructureInfo<KorisnickaPolja.DeployedConfBrowse>(
    'KorisnickaPolja/DeployedConfBrowse'
  );
  export interface DeployedConfBrowse {
    ID: string;
    DatumKreiranja?: Date;
    Korisnik?: string;
  }

  export const ReadOnlyTabsInfo = createStructureInfo<KorisnickaPolja.ReadOnlyTabs>(
    'KorisnickaPolja/ReadOnlyTabs'
  );
  export interface ReadOnlyTabs {
    ID: string;
    TabID?: string;
  }

  export const PredmetTROInfo = createStructureInfo<KorisnickaPolja.PredmetTRO>(
    'KorisnickaPolja/PredmetTRO'
  );
  export interface PredmetTRO {
    PredmetID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPredmetInfo = createStructureInfo<KorisnickaPolja.GetTabsForPredmet>(
    'KorisnickaPolja/GetTabsForPredmet'
  );
  export interface GetTabsForPredmet {
    ID?: string;
  }

  export const PismenoTROInfo = createStructureInfo<KorisnickaPolja.PismenoTRO>(
    'KorisnickaPolja/PismenoTRO'
  );
  export interface PismenoTRO {
    PismenoID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPismenoInfo = createStructureInfo<KorisnickaPolja.GetTabsForPismeno>(
    'KorisnickaPolja/GetTabsForPismeno'
  );
  export interface GetTabsForPismeno {
    ID?: string;
  }

  export const PrilogTROInfo = createStructureInfo<KorisnickaPolja.PrilogTRO>(
    'KorisnickaPolja/PrilogTRO'
  );
  export interface PrilogTRO {
    PrilogID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPrilogInfo = createStructureInfo<KorisnickaPolja.GetTabsForPrilog>(
    'KorisnickaPolja/GetTabsForPrilog'
  );
  export interface GetTabsForPrilog {
    ID?: string;
  }

  export const OsnovniSubjektTROInfo = createStructureInfo<KorisnickaPolja.OsnovniSubjektTRO>(
    'KorisnickaPolja/OsnovniSubjektTRO'
  );
  export interface OsnovniSubjektTRO {
    OsnovniSubjektID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForOsnovniSubjektInfo = createStructureInfo<
    KorisnickaPolja.GetTabsForOsnovniSubjekt
  >('KorisnickaPolja/GetTabsForOsnovniSubjekt');
  export interface GetTabsForOsnovniSubjekt {
    ID?: string;
  }

  export const PredmetTVInfo = createStructureInfo<KorisnickaPolja.PredmetTV>(
    'KorisnickaPolja/PredmetTV'
  );
  export interface PredmetTV {
    PredmetID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Predmet_TWF_VInfo = createStructureInfo<KorisnickaPolja.Predmet_TWF_V>(
    'KorisnickaPolja/Predmet_TWF_V'
  );
  export interface Predmet_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const EditableTabsInfo = createStructureInfo<KorisnickaPolja.EditableTabs>(
    'KorisnickaPolja/EditableTabs'
  );
  export interface EditableTabs {
    ID: string;
    TabID?: string;
  }

  export const PismenoTVInfo = createStructureInfo<KorisnickaPolja.PismenoTV>(
    'KorisnickaPolja/PismenoTV'
  );
  export interface PismenoTV {
    PismenoID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Pismeno_TWF_VInfo = createStructureInfo<KorisnickaPolja.Pismeno_TWF_V>(
    'KorisnickaPolja/Pismeno_TWF_V'
  );
  export interface Pismeno_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const PrilogTVInfo = createStructureInfo<KorisnickaPolja.PrilogTV>(
    'KorisnickaPolja/PrilogTV'
  );
  export interface PrilogTV {
    PrilogID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Prilog_TWF_VInfo = createStructureInfo<KorisnickaPolja.Prilog_TWF_V>(
    'KorisnickaPolja/Prilog_TWF_V'
  );
  export interface Prilog_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const OsnovniSubjektTVInfo = createStructureInfo<KorisnickaPolja.OsnovniSubjektTV>(
    'KorisnickaPolja/OsnovniSubjektTV'
  );
  export interface OsnovniSubjektTV {
    OsnovniSubjektID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const OsnovniSubjekt_TWF_VInfo = createStructureInfo<KorisnickaPolja.OsnovniSubjekt_TWF_V>(
    'KorisnickaPolja/OsnovniSubjekt_TWF_V'
  );
  export interface OsnovniSubjekt_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    KorisnickaPolja.SystemRequiredDatumKreiranja
  >('KorisnickaPolja/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKorisnikInfo = createStructureInfo<
    KorisnickaPolja.SystemRequiredKorisnik
  >('KorisnickaPolja/SystemRequiredKorisnik');
  export interface SystemRequiredKorisnik {}
}

export module Connector {
  export const ServiceLogInfo = createStructureInfo<Connector.ServiceLog>('Connector/ServiceLog');
  export interface ServiceLog {
    ID: string;
    Action?: string;
    IsRequest?: boolean;
    Content?: string;
    CorrelationState?: string;
    TimeStamp?: Date;
  }

  export const DocumentTemplateLookupInfo = createStructureInfo<Connector.DocumentTemplateLookup>(
    'Connector/DocumentTemplateLookup'
  );
  export interface DocumentTemplateLookup {
    ID: string;
    Name?: string;
  }
}

export module Centrix2 {}

export module Centrix2DMS {
  export const PrincipalScanSettingsInfo = createStructureInfo<Centrix2DMS.PrincipalScanSettings>(
    'Centrix2DMS/PrincipalScanSettings'
  );
  export interface PrincipalScanSettings {
    ID: string;
    ScanAfterSavePismeno?: boolean;
  }

  export const UpsertPrincipalScanSettingsInfo = createStructureInfo<
    Centrix2DMS.UpsertPrincipalScanSettings
  >('Centrix2DMS/UpsertPrincipalScanSettings');
  export interface UpsertPrincipalScanSettings {
    ScanAfterSavePismeno?: boolean;
  }

  export const DmsInfoPismenoIPriloziInfo = createStructureInfo<Centrix2DMS.DmsInfoPismenoIPrilozi>(
    'Centrix2DMS/DmsInfoPismenoIPrilozi'
  );
  export interface DmsInfoPismenoIPrilozi {
    ID: string;
    PismenoID?: string;
    PredmetID?: string;
    Vrsta?: string;
    Naziv?: string;
    FileName?: string;
    RepositoryID?: string;
  }

  export const DmsDocumentForOcrInfo = createStructureInfo<Centrix2DMS.DmsDocumentForOcr>(
    'Centrix2DMS/DmsDocumentForOcr'
  );
  export interface DmsDocumentForOcr {
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
    DmsProvider?: string;
    Subtype?: string;
    LightDMSDmsDocumentForOcrID?: string;
    CmisDmsDmsDocumentForOcrID?: string;
  }

  export const PismenoPrilogForDmsPermissionsInfo = createStructureInfo<
    Centrix2DMS.PismenoPrilogForDmsPermissions
  >('Centrix2DMS/PismenoPrilogForDmsPermissions');
  export interface PismenoPrilogForDmsPermissions {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    Tip?: string;
  }

  export const CheckPermissionResultInfo = createStructureInfo<Centrix2DMS.CheckPermissionResult>(
    'Centrix2DMS/CheckPermissionResult'
  );
  export interface CheckPermissionResult {
    Allowed?: boolean;
  }

  export const HasReadPermissionInfo = createStructureInfo<Centrix2DMS.HasReadPermission>(
    'Centrix2DMS/HasReadPermission'
  );
  export interface HasReadPermission {
    DocumentID?: string;
  }

  export const HasReadPermissionFunctionInfo = createFunctionInfo(
    HasReadPermissionInfo,
    CheckPermissionResultInfo
  );

  export const CheckReadPermissionInfo = createStructureInfo<Centrix2DMS.CheckReadPermission>(
    'Centrix2DMS/CheckReadPermission'
  );
  export interface CheckReadPermission {
    DocumentID?: string;
  }

  export const HasWritePermissionInfo = createStructureInfo<Centrix2DMS.HasWritePermission>(
    'Centrix2DMS/HasWritePermission'
  );
  export interface HasWritePermission {
    DocumentID?: string;
  }

  export const HasWritePermissionFunctionInfo = createFunctionInfo(
    HasWritePermissionInfo,
    CheckPermissionResultInfo
  );

  export const CheckWritePermissionInfo = createStructureInfo<Centrix2DMS.CheckWritePermission>(
    'Centrix2DMS/CheckWritePermission'
  );
  export interface CheckWritePermission {
    DocumentID?: string;
  }

  export const CheckValidForDownloadResultInfo = createStructureInfo<
    Centrix2DMS.CheckValidForDownloadResult
  >('Centrix2DMS/CheckValidForDownloadResult');
  export interface CheckValidForDownloadResult {
    Valid?: boolean;
    NotValidReason?: string;
  }

  export const CheckValidForDownloadInfo = createStructureInfo<Centrix2DMS.CheckValidForDownload>(
    'Centrix2DMS/CheckValidForDownload'
  );
  export interface CheckValidForDownload {
    DocumentID?: string;
  }

  export const CheckValidForDownloadFunctionInfo = createFunctionInfo(
    CheckValidForDownloadInfo,
    CheckValidForDownloadResultInfo
  );

  export const CheckDownloadPermissionInfo = createStructureInfo<
    Centrix2DMS.CheckDownloadPermission
  >('Centrix2DMS/CheckDownloadPermission');
  export interface CheckDownloadPermission {
    DocumentID?: string;
  }

  export const CheckCheckoutPermissionInfo = createStructureInfo<
    Centrix2DMS.CheckCheckoutPermission
  >('Centrix2DMS/CheckCheckoutPermission');
  export interface CheckCheckoutPermission {
    DocumentID?: string;
  }

  export const CheckUploadPermissionInfo = createStructureInfo<Centrix2DMS.CheckUploadPermission>(
    'Centrix2DMS/CheckUploadPermission'
  );
  export interface CheckUploadPermission {
    DocumentID?: string;
  }
}

export module LightDMS {
  export const DmsDocumentInfoInfo = createStructureInfo<LightDMS.DmsDocumentInfo>(
    'LightDMS/DmsDocumentInfo'
  );
  export interface DmsDocumentInfo {
    ID: string;
    VersionNumber?: number;
    CreatedDate?: Date;
    Name?: string;
    ContentStreamFileName?: string;
    ContentStreamMimeType?: string;
    ContentStreamLength?: number;
    CheckedOutBy?: string;
    CreatedBy?: string;
    CheckinComment?: string;
    LastVersionIsScan?: boolean;
    FileExtension?: string;
    IsScan?: boolean;
    VlasnikZapisa?: string;
    DocumentVersionID?: string;
    FileContentID?: string;
  }

  export const DmsDocumentVersionInfoInfo = createStructureInfo<LightDMS.DmsDocumentVersionInfo>(
    'LightDMS/DmsDocumentVersionInfo'
  );
  export interface DmsDocumentVersionInfo {
    ID: string;
    VersionNumber?: number;
    CreatedDate?: Date;
    Name?: string;
    ContentStreamFileName?: string;
    ContentStreamMimeType?: string;
    ContentStreamLength?: number;
    CheckedOutBy?: string;
    CreatedBy?: string;
    CheckinComment?: string;
    LastVersionIsScan?: boolean;
    FileExtension?: string;
    IsScan?: boolean;
    VlasnikZapisa?: string;
    DocumentVersionID?: string;
    FileContentID?: string;
  }

  export const DmsDocumentForOcrInfo = createStructureInfo<LightDMS.DmsDocumentForOcr>(
    'LightDMS/DmsDocumentForOcr'
  );
  export interface DmsDocumentForOcr {
    ID: string;
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
  }

  export const DocumentVersionInfo = createStructureInfo<LightDMS.DocumentVersion>(
    'LightDMS/DocumentVersion'
  );
  export interface DocumentVersion {
    ID: string;
    IsScan?: boolean;
    FileExtension?: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    VersionNumber?: number;
    FileName: string;
    FileContentID: string;
    RepositoryID?: string;
  }

  export const ComputeDocumentStatusExtendedInfo = createStructureInfo<
    LightDMS.ComputeDocumentStatusExtended
  >('LightDMS/ComputeDocumentStatusExtended');
  export interface ComputeDocumentStatusExtended {
    ID: string;
    LastVersionIsScan?: boolean;
  }

  export const DocumentStatusInfo = createStructureInfo<LightDMS.DocumentStatus>(
    'LightDMS/DocumentStatus'
  );
  export interface DocumentStatus {
    ID: string;
    LastVersionIsScan?: boolean;
    LastEventID?: string;
    CheckedOutToID?: string;
    IsCheckout?: boolean;
    LastVersionID?: string;
  }

  export const UpsertObrisiDigitalniSadrzajPredmetaIPismenaInfo = createStructureInfo<
    LightDMS.UpsertObrisiDigitalniSadrzajPredmetaIPismena
  >('LightDMS/UpsertObrisiDigitalniSadrzajPredmetaIPismena');
  export interface UpsertObrisiDigitalniSadrzajPredmetaIPismena {
    PredmetID: string;
  }

  export const CheckoutInfo = createStructureInfo<LightDMS.Checkout>('LightDMS/Checkout');
  export interface Checkout {
    ID: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    RepositoryID?: string;
  }

  export const MultipleDocumentCheckoutInfo = createStructureInfo<
    LightDMS.MultipleDocumentCheckout
  >('LightDMS/MultipleDocumentCheckout');
  export interface MultipleDocumentCheckout {}

  export const NullDocumentCheckoutInfo = createStructureInfo<LightDMS.NullDocumentCheckout>(
    'LightDMS/NullDocumentCheckout'
  );
  export interface NullDocumentCheckout {}

  export const DocumentEventInfo = createStructureInfo<LightDMS.DocumentEvent>(
    'LightDMS/DocumentEvent'
  );
  export interface DocumentEvent {
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    RepositoryID?: string;
    Subtype?: string;
    CheckoutID?: string;
    DocumentVersionID?: string;
    UndoCheckoutID?: string;
  }

  export const DocumentStatusBeforeEventInfo = createStructureInfo<
    LightDMS.DocumentStatusBeforeEvent
  >('LightDMS/DocumentStatusBeforeEvent');
  export interface DocumentStatusBeforeEvent {
    ID: string;
    PreviousEventID?: string;
    DocumentID?: string;
    CheckoutID?: string;
    DocumentVersionID?: string;
    CheckedOutToID?: string;
  }

  export const ComputeDocumentStatusInfo = createStructureInfo<LightDMS.ComputeDocumentStatus>(
    'LightDMS/ComputeDocumentStatus'
  );
  export interface ComputeDocumentStatus {
    ID: string;
    LastEventID?: string;
    CheckedOutToID?: string;
    IsCheckout?: boolean;
    LastVersionID?: string;
  }

  export const OtherUserDocumentCheckInInfo = createStructureInfo<
    LightDMS.OtherUserDocumentCheckIn
  >('LightDMS/OtherUserDocumentCheckIn');
  export interface OtherUserDocumentCheckIn {}

  export const DocumentVersionExtInfo = createStructureInfo<LightDMS.DocumentVersionExt>(
    'LightDMS/DocumentVersionExt'
  );
  export interface DocumentVersionExt {
    ID: string;
    SizeInKBytes?: number;
    FileExtension?: string;
  }

  export const FileContentInfo = createStructureInfo<LightDMS.FileContent>('LightDMS/FileContent');
  export interface FileContent {
    ID: string;
    CreatedDate?: Date;
    AzureStorage?: boolean;
  }

  export const DocumentRepositoryInfo = createStructureInfo<LightDMS.DocumentRepository>(
    'LightDMS/DocumentRepository'
  );
  export interface DocumentRepository {
    ID: string;
    Name: string;
  }

  export const UndoCheckoutInfo = createStructureInfo<LightDMS.UndoCheckout>(
    'LightDMS/UndoCheckout'
  );
  export interface UndoCheckout {
    ID: string;
    RepositoryID?: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
  }

  export const OtherUserDocumentUndoCheckoutInfo = createStructureInfo<
    LightDMS.OtherUserDocumentUndoCheckout
  >('LightDMS/OtherUserDocumentUndoCheckout');
  export interface OtherUserDocumentUndoCheckout {}

  export const DocumentNotCheckoutedInfo = createStructureInfo<LightDMS.DocumentNotCheckouted>(
    'LightDMS/DocumentNotCheckouted'
  );
  export interface DocumentNotCheckouted {}

  export const ContentIliAzureStorageInfo = createStructureInfo<LightDMS.ContentIliAzureStorage>(
    'LightDMS/ContentIliAzureStorage'
  );
  export interface ContentIliAzureStorage {}

  export const SystemRequiredCreatedByInfo = createStructureInfo<LightDMS.SystemRequiredCreatedBy>(
    'LightDMS/SystemRequiredCreatedBy'
  );
  export interface SystemRequiredCreatedBy {}

  export const SystemRequiredCreatedDateInfo = createStructureInfo<
    LightDMS.SystemRequiredCreatedDate
  >('LightDMS/SystemRequiredCreatedDate');
  export interface SystemRequiredCreatedDate {}

  export const SystemRequiredVersionNumberInfo = createStructureInfo<
    LightDMS.SystemRequiredVersionNumber
  >('LightDMS/SystemRequiredVersionNumber');
  export interface SystemRequiredVersionNumber {}
}

export module ObradaPismena {
  export const OdlaganjeURokovnikInfo = createStructureInfo<ObradaPismena.OdlaganjeURokovnik>(
    'ObradaPismena/OdlaganjeURokovnik'
  );
  export interface OdlaganjeURokovnik {
    ID: string;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const PredmetURokovnikuDocumentCheckoutInfo = createStructureInfo<
    ObradaPismena.PredmetURokovnikuDocumentCheckout
  >('ObradaPismena/PredmetURokovnikuDocumentCheckout');
  export interface PredmetURokovnikuDocumentCheckout {}

  export const OdlaganjeUAdActaInfo = createStructureInfo<ObradaPismena.OdlaganjeUAdActa>(
    'ObradaPismena/OdlaganjeUAdActa'
  );
  export interface OdlaganjeUAdActa {
    ID: string;
    Trajno?: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const PredmetUPismohraniDocumentCheckoutInfo = createStructureInfo<
    ObradaPismena.PredmetUPismohraniDocumentCheckout
  >('ObradaPismena/PredmetUPismohraniDocumentCheckout');
  export interface PredmetUPismohraniDocumentCheckout {}

  export const DijeljenjePredmetaPismenaInfo = createStructureInfo<
    ObradaPismena.DijeljenjePredmetaPismena
  >('ObradaPismena/DijeljenjePredmetaPismena');
  export interface DijeljenjePredmetaPismena {
    ID: string;
    PredmetID?: string;
    PismenoID?: string;
    DodaoPravaID?: string;
    MaknuoPravaID?: string;
    SluzbenikID: string;
    UstrojstvenaJedinicaID?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    Napomena?: string;
    IsPravoRadaIliUvida: boolean;
    RadnoTijeloID?: string;
    Active?: boolean;
  }

  export const ValidForDijeljenjePismenaPredmetaInfo = createStructureInfo<
    ObradaPismena.ValidForDijeljenjePismenaPredmeta
  >('ObradaPismena/ValidForDijeljenjePismenaPredmeta');
  export interface ValidForDijeljenjePismenaPredmeta {}

  export const ValidForPonistavanjeDijeljenjaPismenaPredmetaInfo = createStructureInfo<
    ObradaPismena.ValidForPonistavanjeDijeljenjaPismenaPredmeta
  >('ObradaPismena/ValidForPonistavanjeDijeljenjaPismenaPredmeta');
  export interface ValidForPonistavanjeDijeljenjaPismenaPredmeta {}

  export const RemoveJourselfFromSuradniciInfo = createStructureInfo<
    ObradaPismena.RemoveJourselfFromSuradnici
  >('ObradaPismena/RemoveJourselfFromSuradnici');
  export interface RemoveJourselfFromSuradnici {}

  export const PodijeliPredmetPismenoInfo = createStructureInfo<
    ObradaPismena.PodijeliPredmetPismeno
  >('ObradaPismena/PodijeliPredmetPismeno');
  export interface PodijeliPredmetPismeno {
    PredmetID?: string;
    PismenoID?: string;
    Napomena?: string;
    IsPravoRadaIliUvida?: boolean;
    InsertZpp?: boolean;
    KreiranoIzPismenaID?: string;
    SubjektDodjeljivanjaID?: string;
  }

  export const ZaposlenikBrojcanaOznakaInfo = createStructureInfo<
    ObradaPismena.ZaposlenikBrojcanaOznaka
  >('ObradaPismena/ZaposlenikBrojcanaOznaka');
  export interface ZaposlenikBrojcanaOznaka {
    ID: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const DijeljenjePredmetaPismenaExtendedInfo = createStructureInfo<
    ObradaPismena.DijeljenjePredmetaPismenaExtended
  >('ObradaPismena/DijeljenjePredmetaPismenaExtended');
  export interface DijeljenjePredmetaPismenaExtended {
    ID: string;
    VrstaDodjelePrava?: string;
  }

  export const DijeljenjePredmetaPismenaBrowseInfo = createStructureInfo<
    ObradaPismena.DijeljenjePredmetaPismenaBrowse
  >('ObradaPismena/DijeljenjePredmetaPismenaBrowse');
  export interface DijeljenjePredmetaPismenaBrowse {
    ID: string;
    Active?: boolean;
    PredmetID?: string;
    PismenoID?: string;
    DodaoPravaID?: string;
    SluzbenikID?: string;
    Napomena?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    DodaoPravaNaziv?: string;
    SluzbenikNaziv?: string;
    VrstaDodjelePrava?: string;
  }

  export const PonistiDijeljenjePredmetaInfo = createStructureInfo<
    ObradaPismena.PonistiDijeljenjePredmeta
  >('ObradaPismena/PonistiDijeljenjePredmeta');
  export interface PonistiDijeljenjePredmeta {
    PredmetID?: string;
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const PonistiDijeljenjePismenaInfo = createStructureInfo<
    ObradaPismena.PonistiDijeljenjePismena
  >('ObradaPismena/PonistiDijeljenjePismena');
  export interface PonistiDijeljenjePismena {
    PismenoID?: string;
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const UkloniSuradnikaSPredmetaIPismenaInfo = createStructureInfo<
    ObradaPismena.UkloniSuradnikaSPredmetaIPismena
  >('ObradaPismena/UkloniSuradnikaSPredmetaIPismena');
  export interface UkloniSuradnikaSPredmetaIPismena {
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const InsertRezultatObradeAndNewObradaInfo = createStructureInfo<
    ObradaPismena.InsertRezultatObradeAndNewObrada
  >('ObradaPismena/InsertRezultatObradeAndNewObrada');
  export interface InsertRezultatObradeAndNewObrada {
    RezultatObradeNapomena?: string;
    ZaduzeniDjelatnikIDsList?: string;
    RokZaRjesavanje?: Date;
    PismenoObradaNapomena?: string;
    PismenoObradaID: string;
    RezultatObradeID: string;
    VrstaObradeID?: string;
  }

  export const KorakObradeInfo = createStructureInfo<ObradaPismena.KorakObrade>(
    'ObradaPismena/KorakObrade'
  );
  export interface KorakObrade {
    ID: string;
    RezultatObradeID: string;
    VrstaObradeID: string;
    SljedeciKorakID: string;
    Active?: boolean;
  }

  export const UnosObrisanogZapisaInfo = createStructureInfo<ObradaPismena.UnosObrisanogZapisa>(
    'ObradaPismena/UnosObrisanogZapisa'
  );
  export interface UnosObrisanogZapisa {}

  export const UnosDuplogZapisaInfo = createStructureInfo<ObradaPismena.UnosDuplogZapisa>(
    'ObradaPismena/UnosDuplogZapisa'
  );
  export interface UnosDuplogZapisa {}

  export const KorakObradeBrowseInfo = createStructureInfo<ObradaPismena.KorakObradeBrowse>(
    'ObradaPismena/KorakObradeBrowse'
  );
  export interface KorakObradeBrowse {
    ID: string;
    VrstaObradeID?: string;
    Active?: boolean;
    RezultatObradeNaziv?: string;
    SljedeciKorak?: string;
  }

  export const PismenoObradaInfo = createStructureInfo<ObradaPismena.PismenoObrada>(
    'ObradaPismena/PismenoObrada'
  );
  export interface PismenoObrada {
    ID: string;
    PismenoID: string;
    KreiraoID?: string;
    ZaduzeniDjelatnikID: string;
    PredhodnaPismenoObradaID?: string;
    Kreirano?: Date;
    RokZaRjesavanje: Date;
    PotvrdaNijePotrebna?: boolean;
    Napomena?: string;
    VrstaObradeID: string;
  }

  export const TudjaObradaInfo = createStructureInfo<ObradaPismena.TudjaObrada>(
    'ObradaPismena/TudjaObrada'
  );
  export interface TudjaObrada {}

  export const RijesenaObradaInfo = createStructureInfo<ObradaPismena.RijesenaObrada>(
    'ObradaPismena/RijesenaObrada'
  );
  export interface RijesenaObrada {}

  export const ValidForObradaPismenaInsertInfo = createStructureInfo<
    ObradaPismena.ValidForObradaPismenaInsert
  >('ObradaPismena/ValidForObradaPismenaInsert');
  export interface ValidForObradaPismenaInsert {}

  export const ValidForObradaPismenaInsert_StatusPismenaInfo = createStructureInfo<
    ObradaPismena.ValidForObradaPismenaInsert_StatusPismena
  >('ObradaPismena/ValidForObradaPismenaInsert_StatusPismena');
  export interface ValidForObradaPismenaInsert_StatusPismena {}

  export const PismenoObradaPermissionsZaduzeniDjelatnikInfo = createStructureInfo<
    ObradaPismena.PismenoObradaPermissionsZaduzeniDjelatnik
  >('ObradaPismena/PismenoObradaPermissionsZaduzeniDjelatnik');
  export interface PismenoObradaPermissionsZaduzeniDjelatnik {
    ID: string;
    ZaduzeniDjelatnikID?: string;
  }

  export const PismenoObradaPermissionsKreiraoInfo = createStructureInfo<
    ObradaPismena.PismenoObradaPermissionsKreirao
  >('ObradaPismena/PismenoObradaPermissionsKreirao');
  export interface PismenoObradaPermissionsKreirao {
    ID: string;
    KreiraoID?: string;
  }

  export const CommputeStatusObradePismenaInfo = createStructureInfo<
    ObradaPismena.CommputeStatusObradePismena
  >('ObradaPismena/CommputeStatusObradePismena');
  export interface CommputeStatusObradePismena {
    ID: string;
    PismenoID?: string;
    StatusObradeID?: string;
  }

  export const StatusObradePismenaInfo = createStructureInfo<ObradaPismena.StatusObradePismena>(
    'ObradaPismena/StatusObradePismena'
  );
  export interface StatusObradePismena {
    ID: string;
    PismenoID?: string;
    StatusObradeID?: string;
  }

  export const ZaposleniciZaDodjeluInfo = createStructureInfo<ObradaPismena.ZaposleniciZaDodjelu>(
    'ObradaPismena/ZaposleniciZaDodjelu'
  );
  export interface ZaposleniciZaDodjelu {
    ID: string;
    ImePrezime?: string;
    BrojcanaOznaka?: string;
    NazivUJNaziv?: string;
    NazivUJNazivBrojcanaOznaka?: string;
  }

  export const ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearchInfo = createStructureInfo<
    ObradaPismena.ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearch
  >('ObradaPismena/ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearch');
  export interface ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearch {
    Pattern?: string;
  }

  export const ResolveZaduzeniDjelatnikResultInfo = createStructureInfo<
    ObradaPismena.ResolveZaduzeniDjelatnikResult
  >('ObradaPismena/ResolveZaduzeniDjelatnikResult');
  export interface ResolveZaduzeniDjelatnikResult {
    ZaduzeniDjelatnikId?: string;
  }

  export const ResolveZaduzeniDjelatnikInfo = createStructureInfo<
    ObradaPismena.ResolveZaduzeniDjelatnik
  >('ObradaPismena/ResolveZaduzeniDjelatnik');
  export interface ResolveZaduzeniDjelatnik {
    PrethodnaObradaId?: string;
  }

  export const ResolveZaduzeniDjelatnikFunctionInfo = createFunctionInfo(
    ResolveZaduzeniDjelatnikInfo,
    ResolveZaduzeniDjelatnikResultInfo
  );

  export const ResolveSljedecaVrstaObradeResultInfo = createStructureInfo<
    ObradaPismena.ResolveSljedecaVrstaObradeResult
  >('ObradaPismena/ResolveSljedecaVrstaObradeResult');
  export interface ResolveSljedecaVrstaObradeResult {
    VrstaObradeId?: string;
  }

  export const ResolveSljedecaVrstaObradeInfo = createStructureInfo<
    ObradaPismena.ResolveSljedecaVrstaObrade
  >('ObradaPismena/ResolveSljedecaVrstaObrade');
  export interface ResolveSljedecaVrstaObrade {
    PrethodnaObradaId?: string;
    RezultatObradeID?: string;
  }

  export const ResolveSljedecaVrstaObradeFunctionInfo = createFunctionInfo(
    ResolveSljedecaVrstaObradeInfo,
    ResolveSljedecaVrstaObradeResultInfo
  );

  export const ImaPravoNaPismenoObradeResultInfo = createStructureInfo<
    ObradaPismena.ImaPravoNaPismenoObradeResult
  >('ObradaPismena/ImaPravoNaPismenoObradeResult');
  export interface ImaPravoNaPismenoObradeResult {
    ImaPravo?: boolean;
  }

  export const ImaPravoNaPismenoObradeInfo = createStructureInfo<
    ObradaPismena.ImaPravoNaPismenoObrade
  >('ObradaPismena/ImaPravoNaPismenoObrade');
  export interface ImaPravoNaPismenoObrade {
    ObradaId?: string;
  }

  export const ImaPravoNaPismenoObradeFunctionInfo = createFunctionInfo(
    ImaPravoNaPismenoObradeInfo,
    ImaPravoNaPismenoObradeResultInfo
  );

  export const PismenoObradaBrisanjeInfo = createStructureInfo<ObradaPismena.PismenoObradaBrisanje>(
    'ObradaPismena/PismenoObradaBrisanje'
  );
  export interface PismenoObradaBrisanje {
    ID: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const PismenoObradaFtsComputedInfo = createStructureInfo<
    ObradaPismena.PismenoObradaFtsComputed
  >('ObradaPismena/PismenoObradaFtsComputed');
  export interface PismenoObradaFtsComputed {
    ID: string;
    PismenoID?: string;
    FtsContent?: string;
  }

  export const PismenoObradaFtsInfo = createStructureInfo<ObradaPismena.PismenoObradaFts>(
    'ObradaPismena/PismenoObradaFts'
  );
  export interface PismenoObradaFts {
    ID: string;
    FtsContent?: string;
    PismenoID?: string;
  }

  export const OvlastenjeZaObraduPismenaInfo = createStructureInfo<
    ObradaPismena.OvlastenjeZaObraduPismena
  >('ObradaPismena/OvlastenjeZaObraduPismena');
  export interface OvlastenjeZaObraduPismena {
    ID: string;
    SluzbenikID: string;
    OvlastenikID: string;
    OvlastioID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
    Active?: boolean;
  }

  export const UniqueItemInfo = createStructureInfo<ObradaPismena.UniqueItem>(
    'ObradaPismena/UniqueItem'
  );
  export interface UniqueItem {}

  export const OvlastenjeZaObraduPismenaBrowseBaseInfo = createStructureInfo<
    ObradaPismena.OvlastenjeZaObraduPismenaBrowseBase
  >('ObradaPismena/OvlastenjeZaObraduPismenaBrowseBase');
  export interface OvlastenjeZaObraduPismenaBrowseBase {
    ID: string;
    IsValid?: boolean;
  }

  export const OvlastenjeZaObraduPismenaBrowseInfo = createStructureInfo<
    ObradaPismena.OvlastenjeZaObraduPismenaBrowse
  >('ObradaPismena/OvlastenjeZaObraduPismenaBrowse');
  export interface OvlastenjeZaObraduPismenaBrowse {
    ID: string;
    Active?: boolean;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
    SluzbenikNaziv?: string;
    SluzbenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastenikNaziv?: string;
    OvlastenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastioNaziv?: string;
    OvlastioNazivUJNazivBrojcanaOznaka?: string;
    SluzbenikUstrojstvenaJedinicaID?: string;
    SluzbenikUstrojstvenaJedinicaRadomUpravljaID?: string;
    IsValid?: boolean;
  }

  export const OvlastenjeZaObraduPismenaActiveInfo = createStructureInfo<
    ObradaPismena.OvlastenjeZaObraduPismenaActive
  >('ObradaPismena/OvlastenjeZaObraduPismenaActive');
  export interface OvlastenjeZaObraduPismenaActive {
    ID: string;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
  }

  export const PismenoFiksniDioKlaseInfo = createStructureInfo<ObradaPismena.PismenoFiksniDioKlase>(
    'ObradaPismena/PismenoFiksniDioKlase'
  );
  export interface PismenoFiksniDioKlase {
    ID: string;
    FiksniDioKlase?: string;
    FiksniDioKlaseDosjeaID?: string;
  }

  export const PismenoObradaBrowseFilterInfo = createStructureInfo<
    ObradaPismena.PismenoObradaBrowseFilter
  >('ObradaPismena/PismenoObradaBrowseFilter');
  export interface PismenoObradaBrowseFilter {
    KreiranoOd?: Date;
    KreiranoDo?: Date;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ObraduKreiraoIds?: string;
    ObraduRjesioObrisaoIds?: string;
    ZaduzenDjelatnikIds?: string;
    RokZaRjesavanjeOd?: Date;
    RokZaRjesavanjeDo?: Date;
    VrstaObradeIds?: string;
    Napomena?: string;
    StatusObradeIds?: string;
    DatumRjesavanjaOd?: Date;
    DatumRjesavanjaDo?: Date;
    RezultatObradeIds?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    Pattern?: string;
    ShowStatusPonistena?: boolean;
    ShowStatusCekaRjesavanje?: boolean;
    ShowStatusRijesena?: boolean;
  }

  export const PismenoObradaBrowseInfo = createStructureInfo<ObradaPismena.PismenoObradaBrowse>(
    'ObradaPismena/PismenoObradaBrowse'
  );
  export interface PismenoObradaBrowse {
    ID: string;
    Kreirano?: Date;
    RokZaRjesavanje?: Date;
    PotvrdaNijePotrebna?: boolean;
    Napomena?: string;
    PismenoID?: string;
    EntityID?: string;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    VrstaObradeID?: string;
    VrstaObradeNaziv?: string;
    KreiraoID?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnikID?: string;
    ZaduzenDjelatnik?: string;
    Rezultat?: string;
    DatumRjesavanja?: Date;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    ZaposlenikRjesioObrisaoID?: string;
    HasObradaIstogPismena?: number;
    StatusObradeID?: string;
    StatusObrade?: string;
  }

  export const ZaduzeneObradePismenaInfo = createStructureInfo<ObradaPismena.ZaduzeneObradePismena>(
    'ObradaPismena/ZaduzeneObradePismena'
  );
  export interface ZaduzeneObradePismena {}

  export const KreiraneObradePismenaInfo = createStructureInfo<ObradaPismena.KreiraneObradePismena>(
    'ObradaPismena/KreiraneObradePismena'
  );
  export interface KreiraneObradePismena {}

  export const PocetneObradePismenaInfo = createStructureInfo<ObradaPismena.PocetneObradePismena>(
    'ObradaPismena/PocetneObradePismena'
  );
  export interface PocetneObradePismena {}

  export const AktivneObradeInfo = createStructureInfo<ObradaPismena.AktivneObrade>(
    'ObradaPismena/AktivneObrade'
  );
  export interface AktivneObrade {}

  export const PismenoObradaNapomenaBrisanjeRjesavanjeInfo = createStructureInfo<
    ObradaPismena.PismenoObradaNapomenaBrisanjeRjesavanje
  >('ObradaPismena/PismenoObradaNapomenaBrisanjeRjesavanje');
  export interface PismenoObradaNapomenaBrisanjeRjesavanje {
    ID: string;
    Napomena?: string;
    ImePrezime?: string;
    ZaposlenikID?: string;
  }

  export const PismenoObradaDetailInfo = createStructureInfo<ObradaPismena.PismenoObradaDetail>(
    'ObradaPismena/PismenoObradaDetail'
  );
  export interface PismenoObradaDetail {
    ID: string;
    PismenoID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObrade?: string;
    DatumRjesavanja?: Date;
    Rezultat?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    Active?: boolean;
    VrstaObradeID?: string;
  }

  export const PismenoObradaDetailBrowseInfo = createStructureInfo<
    ObradaPismena.PismenoObradaDetailBrowse
  >('ObradaPismena/PismenoObradaDetailBrowse');
  export interface PismenoObradaDetailBrowse {
    ID: string;
    PismenoID?: string;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    Kreirano?: Date;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObrade?: string;
    DatumRjesavanja?: Date;
    Rezultat?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    VrstaObradeID?: string;
    Active?: boolean;
  }

  export const PismenoObradaObradeIstogPismenaInfo = createStructureInfo<
    ObradaPismena.PismenoObradaObradeIstogPismena
  >('ObradaPismena/PismenoObradaObradeIstogPismena');
  export interface PismenoObradaObradeIstogPismena {
    ID: string;
    ObradaID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObradeNaziv?: string;
    RezultatObradeNaziv?: string;
    NapomenaOBrisanjuRjesavnju?: string;
  }

  export const PismenoObradaObradeIstogPismenaBrowseInfo = createStructureInfo<
    ObradaPismena.PismenoObradaObradeIstogPismenaBrowse
  >('ObradaPismena/PismenoObradaObradeIstogPismenaBrowse');
  export interface PismenoObradaObradeIstogPismenaBrowse {
    ID: string;
    ObradaID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObradeNaziv?: string;
    RezultatObradeNaziv?: string;
    NapomenaOBrisanjuRjesavnju?: string;
  }

  export const PismenoObradaIstogPismenaDetailCountInfo = createStructureInfo<
    ObradaPismena.PismenoObradaIstogPismenaDetailCount
  >('ObradaPismena/PismenoObradaIstogPismenaDetailCount');
  export interface PismenoObradaIstogPismenaDetailCount {
    ID: string;
    HasObradaIstogPismena?: number;
  }

  export const ComputePravoNaPismenoPrekoObradeOvlastenjaInfo = createStructureInfo<
    ObradaPismena.ComputePravoNaPismenoPrekoObradeOvlastenja
  >('ObradaPismena/ComputePravoNaPismenoPrekoObradeOvlastenja');
  export interface ComputePravoNaPismenoPrekoObradeOvlastenja {
    ID: string;
    ZaposlenikID?: string;
    PismenoID?: string;
  }

  export const PravoNaPismenoPrekoObradeOvlastenjaInfo = createStructureInfo<
    ObradaPismena.PravoNaPismenoPrekoObradeOvlastenja
  >('ObradaPismena/PravoNaPismenoPrekoObradeOvlastenja');
  export interface PravoNaPismenoPrekoObradeOvlastenja {
    ID: string;
    ZaposlenikID?: string;
    PismenoID?: string;
  }

  export const RezultatObradeInfo = createStructureInfo<ObradaPismena.RezultatObrade>(
    'ObradaPismena/RezultatObrade'
  );
  export interface RezultatObrade {
    ID: string;
    Naziv?: string;
    Potvrdjena?: boolean;
    Odbijena?: boolean;
  }

  export const RezultatObradeSljedeciKorakRequiredInfo = createStructureInfo<
    ObradaPismena.RezultatObradeSljedeciKorakRequired
  >('ObradaPismena/RezultatObradeSljedeciKorakRequired');
  export interface RezultatObradeSljedeciKorakRequired {
    ID: string;
    Naziv?: string;
    SljedeciKorakObvezan?: boolean;
    SljedeciKorakPostoji?: boolean;
  }

  export const RezultatObradeSljedeciKorakRequiredGetInfo = createStructureInfo<
    ObradaPismena.RezultatObradeSljedeciKorakRequiredGet
  >('ObradaPismena/RezultatObradeSljedeciKorakRequiredGet');
  export interface RezultatObradeSljedeciKorakRequiredGet {
    PismenoObradaID?: string;
    RezultatObradeID?: string;
  }

  export const RezultatObradePismenaInfo = createStructureInfo<ObradaPismena.RezultatObradePismena>(
    'ObradaPismena/RezultatObradePismena'
  );
  export interface RezultatObradePismena {
    ID: string;
    KreiraoID?: string;
    RezultatObradeID: string;
    Napomena?: string;
    DatumRjesavanja?: Date;
  }

  export const RjesavanjeTudjihObradaInfo = createStructureInfo<
    ObradaPismena.RjesavanjeTudjihObrada
  >('ObradaPismena/RjesavanjeTudjihObrada');
  export interface RjesavanjeTudjihObrada {}

  export const SljedeciKorakObradeObavezanInfo = createStructureInfo<
    ObradaPismena.SljedeciKorakObradeObavezan
  >('ObradaPismena/SljedeciKorakObradeObavezan');
  export interface SljedeciKorakObradeObavezan {}

  export const ValidForRezultatObradaPismenaInfo = createStructureInfo<
    ObradaPismena.ValidForRezultatObradaPismena
  >('ObradaPismena/ValidForRezultatObradaPismena');
  export interface ValidForRezultatObradaPismena {}

  export const ValidForRezultatObradaPismena_StatusPismenaInfo = createStructureInfo<
    ObradaPismena.ValidForRezultatObradaPismena_StatusPismena
  >('ObradaPismena/ValidForRezultatObradaPismena_StatusPismena');
  export interface ValidForRezultatObradaPismena_StatusPismena {}

  export const StatusObradeInfo = createStructureInfo<ObradaPismena.StatusObrade>(
    'ObradaPismena/StatusObrade'
  );
  export interface StatusObrade {
    ID: string;
    Naziv?: string;
    CekaRjesavanje?: boolean;
    Rijesena?: boolean;
    Ponistena?: boolean;
  }

  export const StatusObradeSmartSearchInfo = createStructureInfo<
    ObradaPismena.StatusObradeSmartSearch
  >('ObradaPismena/StatusObradeSmartSearch');
  export interface StatusObradeSmartSearch {
    Pattern?: string;
  }

  export const VrstaObradeInfo = createStructureInfo<ObradaPismena.VrstaObrade>(
    'ObradaPismena/VrstaObrade'
  );
  export interface VrstaObrade {
    ID: string;
    Active?: boolean;
    Naziv: string;
    BrojDanaZaRjesavanje?: number;
    MozeBitiPrviKorak?: boolean;
    ZaduzeniDjelatnikJeHijerarhijskiNadredjeniVoditelj?: boolean;
    PotvrdaNijePotrebna?: boolean;
    SljedeciKorakObvezan?: boolean;
    StatusPismenaZaPostavitiID?: string;
  }

  export const SljedeciKorakObvezanKorakVrsteMustExistInfo = createStructureInfo<
    ObradaPismena.SljedeciKorakObvezanKorakVrsteMustExist
  >('ObradaPismena/SljedeciKorakObvezanKorakVrsteMustExist');
  export interface SljedeciKorakObvezanKorakVrsteMustExist {}

  export const VrsteDostupneNaPismenuInfo = createStructureInfo<
    ObradaPismena.VrsteDostupneNaPismenu
  >('ObradaPismena/VrsteDostupneNaPismenu');
  export interface VrsteDostupneNaPismenu {
    PismenoID?: string;
    PismenoIDs?: string;
  }

  export const SljedeciKoraciVrsteObradeInfo = createStructureInfo<
    ObradaPismena.SljedeciKoraciVrsteObrade
  >('ObradaPismena/SljedeciKoraciVrsteObrade');
  export interface SljedeciKoraciVrsteObrade {
    PismenoObradaID?: string;
    RezultatObradeID?: string;
  }

  export const VrstaObradeBrowseInfo = createStructureInfo<ObradaPismena.VrstaObradeBrowse>(
    'ObradaPismena/VrstaObradeBrowse'
  );
  export interface VrstaObradeBrowse {
    ID: string;
    Naziv?: string;
    BrojDanaZaRjesavanje?: number;
    PotvrdaNijePotrebna?: boolean;
    SljedeciKorakObvezan?: boolean;
    MozeBitiPrviKorak?: boolean;
    ZaduzeniDjelatnikJeHijerarhijskiNadredjeniVoditelj?: boolean;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    StatusPismenaZaPostavitiNaziv?: string;
  }

  export const VrstaObradeExtendedInfo = createStructureInfo<ObradaPismena.VrstaObradeExtended>(
    'ObradaPismena/VrstaObradeExtended'
  );
  export interface VrstaObradeExtended {
    ID: string;
    KlasifikacijskeOznake?: string;
  }

  export const VrstaObradeGlobalnoDostupnaInfo = createStructureInfo<
    ObradaPismena.VrstaObradeGlobalnoDostupna
  >('ObradaPismena/VrstaObradeGlobalnoDostupna');
  export interface VrstaObradeGlobalnoDostupna {
    ID: string;
    Naziv?: string;
    BrojDanaZaRjesavanje?: number;
    PotvrdaNijePotrebna?: boolean;
  }

  export const VrstaObradeNaPismenuInfo = createStructureInfo<ObradaPismena.VrstaObradeNaPismenu>(
    'ObradaPismena/VrstaObradeNaPismenu'
  );
  export interface VrstaObradeNaPismenu {
    PismenoID?: string;
    VrstaObradeID?: string;
    Subtype?: string;
    VrstaObradeNaPismenuCoreID?: string;
  }

  export const VrstaObradeNaPismenuCoreInfo = createStructureInfo<
    ObradaPismena.VrstaObradeNaPismenuCore
  >('ObradaPismena/VrstaObradeNaPismenuCore');
  export interface VrstaObradeNaPismenuCore {
    ID: string;
    PismenoID?: string;
    VrstaObradeID?: string;
  }

  export const ValidForOdlaganjeUAdActaInfo = createStructureInfo<
    ObradaPismena.ValidForOdlaganjeUAdActa
  >('ObradaPismena/ValidForOdlaganjeUAdActa');
  export interface ValidForOdlaganjeUAdActa {}

  export const ValidForOdlaganjeURokovnikInfo = createStructureInfo<
    ObradaPismena.ValidForOdlaganjeURokovnik
  >('ObradaPismena/ValidForOdlaganjeURokovnik');
  export interface ValidForOdlaganjeURokovnik {}

  export const ZabranaOdlaganjaURokPredmetaSaIstimRokomInfo = createStructureInfo<
    ObradaPismena.ZabranaOdlaganjaURokPredmetaSaIstimRokom
  >('ObradaPismena/ZabranaOdlaganjaURokPredmetaSaIstimRokom');
  export interface ZabranaOdlaganjaURokPredmetaSaIstimRokom {}

  export const UpsertPredmetGrupnoRazvodjenjeInfo = createStructureInfo<
    ObradaPismena.UpsertPredmetGrupnoRazvodjenje
  >('ObradaPismena/UpsertPredmetGrupnoRazvodjenje');
  export interface UpsertPredmetGrupnoRazvodjenje {
    PredmetIDs: string;
    Trajno: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    OznakaID: string;
    TemeljemNovogPismena?: boolean;
  }

  export const UpsertPredmetRazvodjenjeInfo = createStructureInfo<
    ObradaPismena.UpsertPredmetRazvodjenje
  >('ObradaPismena/UpsertPredmetRazvodjenje');
  export interface UpsertPredmetRazvodjenje {
    PredmetID: string;
    PismenoID?: string;
    Trajno?: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    OznakaID: string;
    TemeljemNovogPismena?: boolean;
    Napomena?: string;
  }

  export const OznakaRazvodjenjaInfo = createStructureInfo<ObradaPismena.OznakaRazvodjenja>(
    'ObradaPismena/OznakaRazvodjenja'
  );
  export interface OznakaRazvodjenja {
    ID: string;
    Oznaka: string;
    Opis?: string;
    IsVracanjeURad: boolean;
    IsOdlaganjeUPismohranu: boolean;
    IsOdlaganjeURokovnik: boolean;
    DozvoliDodavanjePismena: boolean;
  }

  export const OznakaRazvodjenjaLookupInfo = createStructureInfo<
    ObradaPismena.OznakaRazvodjenjaLookup
  >('ObradaPismena/OznakaRazvodjenjaLookup');
  export interface OznakaRazvodjenjaLookup {
    ID: string;
    Oznaka?: string;
    Opis?: string;
  }

  export const OznakaRazvodjenjaExcludeVracanjeLookupFilterInfo = createStructureInfo<
    ObradaPismena.OznakaRazvodjenjaExcludeVracanjeLookupFilter
  >('ObradaPismena/OznakaRazvodjenjaExcludeVracanjeLookupFilter');
  export interface OznakaRazvodjenjaExcludeVracanjeLookupFilter {}

  export const InsertVracanjeURadInfo = createStructureInfo<ObradaPismena.InsertVracanjeURad>(
    'ObradaPismena/InsertVracanjeURad'
  );
  export interface InsertVracanjeURad {
    PredmetID?: string;
    PismenoID?: string;
    DatumVracanjaURad?: Date;
    Napomena?: string;
    ForceOdlaganjeURokovnik?: boolean;
  }

  export const UpsertPredmetVracanjeURadInfo = createStructureInfo<
    ObradaPismena.UpsertPredmetVracanjeURad
  >('ObradaPismena/UpsertPredmetVracanjeURad');
  export interface UpsertPredmetVracanjeURad {
    PredmetID: string;
    PismenoID?: string;
    UNadleznostiID: string;
    Napomena?: string;
    ForceOdlaganjeURokovnik?: boolean;
  }

  export const VracanjeURadIzAdActaInfo = createStructureInfo<ObradaPismena.VracanjeURadIzAdActa>(
    'ObradaPismena/VracanjeURadIzAdActa'
  );
  export interface VracanjeURadIzAdActa {
    ID: string;
    DatumVracanjaURad: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const ValidForVracanjeURadIzAdActaInfo = createStructureInfo<
    ObradaPismena.ValidForVracanjeURadIzAdActa
  >('ObradaPismena/ValidForVracanjeURadIzAdActa');
  export interface ValidForVracanjeURadIzAdActa {}

  export const VracanjeURadIzRokovnikaInfo = createStructureInfo<
    ObradaPismena.VracanjeURadIzRokovnika
  >('ObradaPismena/VracanjeURadIzRokovnika');
  export interface VracanjeURadIzRokovnika {
    ID: string;
    DatumVracanjaURad: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const ValidForVracanjeURadIzRokovnikaInfo = createStructureInfo<
    ObradaPismena.ValidForVracanjeURadIzRokovnika
  >('ObradaPismena/ValidForVracanjeURadIzRokovnika');
  export interface ValidForVracanjeURadIzRokovnika {}

  export const VrstaObradeFiksniDioKlaseUpravnostDosjeInfo = createStructureInfo<
    ObradaPismena.VrstaObradeFiksniDioKlaseUpravnostDosje
  >('ObradaPismena/VrstaObradeFiksniDioKlaseUpravnostDosje');
  export interface VrstaObradeFiksniDioKlaseUpravnostDosje {
    ID: string;
    VrstaObradeID?: string;
    FiksniDioKlaseUpravnostDosjeID?: string;
  }

  export const MergeVrstaObradeFiksniDioKlaseUpravnostDosjeInfo = createStructureInfo<
    ObradaPismena.MergeVrstaObradeFiksniDioKlaseUpravnostDosje
  >('ObradaPismena/MergeVrstaObradeFiksniDioKlaseUpravnostDosje');
  export interface MergeVrstaObradeFiksniDioKlaseUpravnostDosje {
    VrstaObradeID?: string;
    FiksniDioKlaseUpravnostDosjeIDs?: string;
  }

  export const DatumOdlaganja_MaxValueFilterInfo = createStructureInfo<
    ObradaPismena.DatumOdlaganja_MaxValueFilter
  >('ObradaPismena/DatumOdlaganja_MaxValueFilter');
  export interface DatumOdlaganja_MaxValueFilter {}

  export const RokCuvanja_MaxValueFilterInfo = createStructureInfo<
    ObradaPismena.RokCuvanja_MaxValueFilter
  >('ObradaPismena/RokCuvanja_MaxValueFilter');
  export interface RokCuvanja_MaxValueFilter {}

  export const DatumVracanjaURad_MaxValueFilterInfo = createStructureInfo<
    ObradaPismena.DatumVracanjaURad_MaxValueFilter
  >('ObradaPismena/DatumVracanjaURad_MaxValueFilter');
  export interface DatumVracanjaURad_MaxValueFilter {}

  export const BrojDanaZaRjesavanje_MinValueFilterInfo = createStructureInfo<
    ObradaPismena.BrojDanaZaRjesavanje_MinValueFilter
  >('ObradaPismena/BrojDanaZaRjesavanje_MinValueFilter');
  export interface BrojDanaZaRjesavanje_MinValueFilter {}

  export const DijeljenjeBezPredmetaIPismenaInfo = createStructureInfo<
    ObradaPismena.DijeljenjeBezPredmetaIPismena
  >('ObradaPismena/DijeljenjeBezPredmetaIPismena');
  export interface DijeljenjeBezPredmetaIPismena {}

  export const OdbacitiDijeljenjeVezanogPredmetaInfo = createStructureInfo<
    ObradaPismena.OdbacitiDijeljenjeVezanogPredmeta
  >('ObradaPismena/OdbacitiDijeljenjeVezanogPredmeta');
  export interface OdbacitiDijeljenjeVezanogPredmeta {}

  export const OdbacitiPonistenjeDijeljenjaVezanogPredmetaInfo = createStructureInfo<
    ObradaPismena.OdbacitiPonistenjeDijeljenjaVezanogPredmeta
  >('ObradaPismena/OdbacitiPonistenjeDijeljenjaVezanogPredmeta');
  export interface OdbacitiPonistenjeDijeljenjaVezanogPredmeta {}

  export const ValidForDijeljenjePismenaPredmetaZaPismenoInfo = createStructureInfo<
    ObradaPismena.ValidForDijeljenjePismenaPredmetaZaPismeno
  >('ObradaPismena/ValidForDijeljenjePismenaPredmetaZaPismeno');
  export interface ValidForDijeljenjePismenaPredmetaZaPismeno {}

  export const ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismenoInfo = createStructureInfo<
    ObradaPismena.ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismeno
  >('ObradaPismena/ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismeno');
  export interface ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismeno {}

  export const OnemogucitiObraduUkolikoJePismenoObrisanoInfo = createStructureInfo<
    ObradaPismena.OnemogucitiObraduUkolikoJePismenoObrisano
  >('ObradaPismena/OnemogucitiObraduUkolikoJePismenoObrisano');
  export interface OnemogucitiObraduUkolikoJePismenoObrisano {}

  export const BrisanjeRjeseneObradeInfo = createStructureInfo<ObradaPismena.BrisanjeRjeseneObrade>(
    'ObradaPismena/BrisanjeRjeseneObrade'
  );
  export interface BrisanjeRjeseneObrade {}

  export const ProvjeraVrijediDoInfo = createStructureInfo<ObradaPismena.ProvjeraVrijediDo>(
    'ObradaPismena/ProvjeraVrijediDo'
  );
  export interface ProvjeraVrijediDo {}

  export const DeaktiviranaObradaInfo = createStructureInfo<ObradaPismena.DeaktiviranaObrada>(
    'ObradaPismena/DeaktiviranaObrada'
  );
  export interface DeaktiviranaObrada {}

  export const SljedeciKorakObvezanIPotvrdaNijePotrebnaInfo = createStructureInfo<
    ObradaPismena.SljedeciKorakObvezanIPotvrdaNijePotrebna
  >('ObradaPismena/SljedeciKorakObvezanIPotvrdaNijePotrebna');
  export interface SljedeciKorakObvezanIPotvrdaNijePotrebna {}

  export const OdlaganjeUPismohranuTemeljemBrisanogPismenaInfo = createStructureInfo<
    ObradaPismena.OdlaganjeUPismohranuTemeljemBrisanogPismena
  >('ObradaPismena/OdlaganjeUPismohranuTemeljemBrisanogPismena');
  export interface OdlaganjeUPismohranuTemeljemBrisanogPismena {}

  export const OdlaganjeURokovnikTemeljemBrisanogPismenaInfo = createStructureInfo<
    ObradaPismena.OdlaganjeURokovnikTemeljemBrisanogPismena
  >('ObradaPismena/OdlaganjeURokovnikTemeljemBrisanogPismena');
  export interface OdlaganjeURokovnikTemeljemBrisanogPismena {}

  export const VracanjeURadIzAdActaTemeljemBrisanogPismenaInfo = createStructureInfo<
    ObradaPismena.VracanjeURadIzAdActaTemeljemBrisanogPismena
  >('ObradaPismena/VracanjeURadIzAdActaTemeljemBrisanogPismena');
  export interface VracanjeURadIzAdActaTemeljemBrisanogPismena {}

  export const VracanjeURadIzRokovnikaTemeljemBrisanogPismenaInfo = createStructureInfo<
    ObradaPismena.VracanjeURadIzRokovnikaTemeljemBrisanogPismena
  >('ObradaPismena/VracanjeURadIzRokovnikaTemeljemBrisanogPismena');
  export interface VracanjeURadIzRokovnikaTemeljemBrisanogPismena {}

  export const InvalidStupanjTajnostiInfo = createStructureInfo<
    ObradaPismena.InvalidStupanjTajnosti
  >('ObradaPismena/InvalidStupanjTajnosti');
  export interface InvalidStupanjTajnosti {}

  export const InvalidStupanjTajnostiPredmetInfo = createStructureInfo<
    ObradaPismena.InvalidStupanjTajnostiPredmet
  >('ObradaPismena/InvalidStupanjTajnostiPredmet');
  export interface InvalidStupanjTajnostiPredmet {}

  export const InvalidStupanjTajnostiPismenoInfo = createStructureInfo<
    ObradaPismena.InvalidStupanjTajnostiPismeno
  >('ObradaPismena/InvalidStupanjTajnostiPismeno');
  export interface InvalidStupanjTajnostiPismeno {}

  export const SystemRequiredDodaoPravaInfo = createStructureInfo<
    ObradaPismena.SystemRequiredDodaoPrava
  >('ObradaPismena/SystemRequiredDodaoPrava');
  export interface SystemRequiredDodaoPrava {}

  export const SystemRequiredDatumOdInfo = createStructureInfo<ObradaPismena.SystemRequiredDatumOd>(
    'ObradaPismena/SystemRequiredDatumOd'
  );
  export interface SystemRequiredDatumOd {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<ObradaPismena.SystemRequiredKreirao>(
    'ObradaPismena/SystemRequiredKreirao'
  );
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumVrijemeInfo = createStructureInfo<
    ObradaPismena.SystemRequiredDatumVrijeme
  >('ObradaPismena/SystemRequiredDatumVrijeme');
  export interface SystemRequiredDatumVrijeme {}

  export const SystemRequiredDatumRjesavanjaInfo = createStructureInfo<
    ObradaPismena.SystemRequiredDatumRjesavanja
  >('ObradaPismena/SystemRequiredDatumRjesavanja');
  export interface SystemRequiredDatumRjesavanja {}

  export const SystemRequiredActiveInfo = createStructureInfo<ObradaPismena.SystemRequiredActive>(
    'ObradaPismena/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}
}

export module CmisDms {
  export const PredmetInfoInfo = createStructureInfo<CmisDms.PredmetInfo>('CmisDms/PredmetInfo');
  export interface PredmetInfo {
    ID: string;
    FolderPath?: string;
    DmsFolderID?: string;
    Klasa?: string;
  }

  export const PismenoPrilogInfoInfo = createStructureInfo<CmisDms.PismenoPrilogInfo>(
    'CmisDms/PismenoPrilogInfo'
  );
  export interface PismenoPrilogInfo {
    ID: string;
    PredmetID?: string;
    FileName?: string;
    FolderPath?: string;
    DmsDocumentID?: string;
    DmsFolderID?: string;
    Barkod?: string;
    DatumNastanka?: Date;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    TipZapisa?: string;
  }

  export const PredmetDmsMapInfo = createStructureInfo<CmisDms.PredmetDmsMap>(
    'CmisDms/PredmetDmsMap'
  );
  export interface PredmetDmsMap {
    ID: string;
    DmsFolderID?: string;
  }

  export const PismenoPrilogDmsMapInfo = createStructureInfo<CmisDms.PismenoPrilogDmsMap>(
    'CmisDms/PismenoPrilogDmsMap'
  );
  export interface PismenoPrilogDmsMap {
    ID: string;
    DmsDocumentID?: string;
    CurrentFileExtension?: string;
    CurrentVersion?: number;
    CurrentVersionIsScan?: boolean;
  }

  export const DmsDocumentForOcrInfo = createStructureInfo<CmisDms.DmsDocumentForOcr>(
    'CmisDms/DmsDocumentForOcr'
  );
  export interface DmsDocumentForOcr {
    ID: string;
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
  }

  export const DmsUserInfoInfo = createStructureInfo<CmisDms.DmsUserInfo>('CmisDms/DmsUserInfo');
  export interface DmsUserInfo {
    ID: string;
    UserName?: string;
    DisplayName?: string;
  }

  export const DocumentVersionInfoInfo = createStructureInfo<CmisDms.DocumentVersionInfo>(
    'CmisDms/DocumentVersionInfo'
  );
  export interface DocumentVersionInfo {
    ID: string;
    DocumentID: string;
    CreatedDate?: Date;
    KorisnikID?: string;
    Version: number;
    Comment?: string;
  }

  export const CheckDmsActionPermissionInfo = createStructureInfo<CmisDms.CheckDmsActionPermission>(
    'CmisDms/CheckDmsActionPermission'
  );
  export interface CheckDmsActionPermission {
    UserName?: string;
    DocumentID?: string;
    ActionType?: string;
  }
}

export module DostavaURad {
  export const DodjelaURadInfo = createStructureInfo<DostavaURad.DodjelaURad>(
    'DostavaURad/DodjelaURad'
  );
  export interface DodjelaURad {
    ID: string;
    PredmetID: string;
    KreiraoID: string;
    SluzbenikID: string;
    DatumKreiranja?: Date;
    SistemskiDatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
  }

  export const ValidForDodjelaURadInfo = createStructureInfo<DostavaURad.ValidForDodjelaURad>(
    'DostavaURad/ValidForDodjelaURad'
  );
  export interface ValidForDodjelaURad {}

  export const DostupanPredmetInfo = createStructureInfo<DostavaURad.DostupanPredmet>(
    'DostavaURad/DostupanPredmet'
  );
  export interface DostupanPredmet {}

  export const UpsertDodjelaURadInfo = createStructureInfo<DostavaURad.UpsertDodjelaURad>(
    'DostavaURad/UpsertDodjelaURad'
  );
  export interface UpsertDodjelaURad {
    DodjelaURad: string;
    AllowDelegiranjeOnSameSluzbenik?: boolean;
  }

  export const PredmetiZaDodjeluURadInfo = createStructureInfo<DostavaURad.PredmetiZaDodjeluURad>(
    'DostavaURad/PredmetiZaDodjeluURad'
  );
  export interface PredmetiZaDodjeluURad {
    ID: string;
    GlavniPredmetID?: string;
    Active?: boolean;
    PredmetNaziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UNadleznostiNaziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetiIzPopisaInfo = createStructureInfo<DostavaURad.PredmetiIzPopisa>(
    'DostavaURad/PredmetiIzPopisa'
  );
  export interface PredmetiIzPopisa {
    IDs?: string;
  }

  export const DostavaDrugomTijeluInfo = createStructureInfo<DostavaURad.DostavaDrugomTijelu>(
    'DostavaURad/DostavaDrugomTijelu'
  );
  export interface DostavaDrugomTijelu {
    ID: string;
    PredmetID: string;
    KreiraoID: string;
    Napomena?: string;
    DrugoTijeloID: string;
    DatumKreiranja?: Date;
  }

  export const ValidForDostavaDrugomTijeluInfo = createStructureInfo<
    DostavaURad.ValidForDostavaDrugomTijelu
  >('DostavaURad/ValidForDostavaDrugomTijelu');
  export interface ValidForDostavaDrugomTijelu {}

  export const DostavaDrugomTijeluBrowseInfo = createStructureInfo<
    DostavaURad.DostavaDrugomTijeluBrowse
  >('DostavaURad/DostavaDrugomTijeluBrowse');
  export interface DostavaDrugomTijeluBrowse {
    ID: string;
    PredmetID?: string;
    DrugoTijeloID?: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    DrugoTijeloNaziv?: string;
  }

  export const UpsertDostavaDrugomTijeluInfo = createStructureInfo<
    DostavaURad.UpsertDostavaDrugomTijelu
  >('DostavaURad/UpsertDostavaDrugomTijelu');
  export interface UpsertDostavaDrugomTijelu {
    DostavaDrugomTijelu: string;
  }

  export const InternaDostavnaKnjigaBrowseSearchInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaBrowseSearch
  >('DostavaURad/InternaDostavnaKnjigaBrowseSearch');
  export interface InternaDostavnaKnjigaBrowseSearch {
    Pattern?: string;
    DatumZahtjevaOd?: Date;
    DatumZahtjevaDo?: Date;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    UrudzbeniBroj?: string;
    NazivPredmeta?: string;
    NazivPismena?: string;
    ZahtjevKreirao?: string;
    ZahtjevZa?: string;
    RazlogIDs?: string;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    DatumVracanjaUPisarnicuOd?: Date;
    DatumVracanjaUPisarnicuDo?: Date;
    VratioUPisarnicu?: string;
  }

  export const InternaDostavnaKnjigaFtsComputedInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaFtsComputed
  >('DostavaURad/InternaDostavnaKnjigaFtsComputed');
  export interface InternaDostavnaKnjigaFtsComputed {
    ID: string;
    FtsContent?: string;
    ZahtjevID?: string;
  }

  export const InternaDostavnaKnjigaFtsInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaFts
  >('DostavaURad/InternaDostavnaKnjigaFts');
  export interface InternaDostavnaKnjigaFts {
    ID: string;
    FtsContent?: string;
    ZahtjevID?: string;
  }

  export const PismenaZaPotvrduPrimitkaBrowseSearchInfo = createStructureInfo<
    DostavaURad.PismenaZaPotvrduPrimitkaBrowseSearch
  >('DostavaURad/PismenaZaPotvrduPrimitkaBrowseSearch');
  export interface PismenaZaPotvrduPrimitkaBrowseSearch {
    Pattern?: string;
    DatumZahtjevaOd?: Date;
    DatumZahtjevaDo?: Date;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    UrudzbeniBroj?: string;
    NazivPredmeta?: string;
    NazivPismena?: string;
    ZahtjevKreirao?: string;
    ZahtjevZa?: string;
    RazlogIDs?: string;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    Page?: number;
    PageSize?: number;
    SortField?: string;
    SortDescending?: boolean;
  }

  export const RazlogZahtjevaZaPotvrdomPrimitkaInfo = createStructureInfo<
    DostavaURad.RazlogZahtjevaZaPotvrdomPrimitka
  >('DostavaURad/RazlogZahtjevaZaPotvrdomPrimitka');
  export interface RazlogZahtjevaZaPotvrdomPrimitka {
    ID: string;
    Naziv: string;
    StatusPismenaZaPostavitiID?: string;
    VracanjePisarnici?: boolean;
    RasporedjivanjePredmeta?: boolean;
    UstupanjePredmeta?: boolean;
    DodjelaPredmetaURad?: boolean;
    ZdruzivanjePostojecemPredmetu?: boolean;
    RucnoDefinirano?: boolean;
    OtvaranjePredmeta?: boolean;
    Active?: boolean;
  }

  export const RazlogZahtjevaZaPotvrdomPrimitkaBrowseInfo = createStructureInfo<
    DostavaURad.RazlogZahtjevaZaPotvrdomPrimitkaBrowse
  >('DostavaURad/RazlogZahtjevaZaPotvrdomPrimitkaBrowse');
  export interface RazlogZahtjevaZaPotvrdomPrimitkaBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    StatusPismenaKodPotvrde?: string;
  }

  export const OvlasteniZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.OvlasteniZaPotvrduPrimitka
  >('DostavaURad/OvlasteniZaPotvrduPrimitka');
  export interface OvlasteniZaPotvrduPrimitka {
    ID: string;
    SluzbenikID: string;
    OvlastenikID: string;
    OvlastioID: string;
    Active?: boolean;
  }

  export const ZahtjevZaPotvrdomPrimitkaInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitka
  >('DostavaURad/ZahtjevZaPotvrdomPrimitka');
  export interface ZahtjevZaPotvrdomPrimitka {
    ID: string;
    KreiraoID: string;
    PismenoID: string;
    PredmetID: string;
    RazlogID?: string;
    DatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    ZahtjevZaID: string;
  }

  export const PotvrdaPrimitkaInfo = createStructureInfo<DostavaURad.PotvrdaPrimitka>(
    'DostavaURad/PotvrdaPrimitka'
  );
  export interface PotvrdaPrimitka {
    ID: string;
    PotvrdioPrimitakID: string;
    PismenoID: string;
    ZahtjevZaPotvrdomPrimitkaID?: string;
    NapomenaUzPotvrduPrimitka?: string;
    DatumPotvrdePrimitka?: Date;
  }

  export const InternaDostavnaKnjigaComputedInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaComputed
  >('DostavaURad/InternaDostavnaKnjigaComputed');
  export interface InternaDostavnaKnjigaComputed {
    ID: string;
    ZahtjevZaPotvrdomPrimitkaID?: string;
    PotvrdaPrimitkaID?: string;
  }

  export const InternaDostavnaKnjigaPersistedInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaPersisted
  >('DostavaURad/InternaDostavnaKnjigaPersisted');
  export interface InternaDostavnaKnjigaPersisted {
    ID: string;
    ZahtjevZaPotvrdomPrimitkaID?: string;
    PotvrdaPrimitkaID?: string;
  }

  export const InternaDostavnaKnjigaInfo = createStructureInfo<DostavaURad.InternaDostavnaKnjiga>(
    'DostavaURad/InternaDostavnaKnjiga'
  );
  export interface InternaDostavnaKnjiga {
    ID: string;
    ZahtjevID?: string;
    PotvrdaPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaBrOznakaNazivUJNaziv?: string;
    ZatrazioPotvrduPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaOdBrOznakaNazivUJNaziv?: string;
    PotvrdioPrimitakID?: string;
    VratioUPisarnicuID?: string;
    PotvrdioPrimitakBrOznakaNazivUJNaziv?: string;
    VratioUPisarnicuBrOznakaNazivUJNaziv?: string;
    PismenoID?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PredmetNaziv?: string;
    PredmetID?: string;
    RazlogID?: string;
    RazlogNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    NapomenaUzPotvrduPrimitka?: string;
    DatumVracanjaUPisarnicu?: Date;
    RazlogVracanjaUPisarnicu?: string;
    DatumZahtjeva?: Date;
    DatumZadnjeAktivnosti?: Date;
    VracanjeUPisarnicuID?: string;
    ZatrazioPotvrduPrimitkaOdID?: string;
  }

  export const InternaDostavnaKnjigaBrowseInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaBrowse
  >('DostavaURad/InternaDostavnaKnjigaBrowse');
  export interface InternaDostavnaKnjigaBrowse {
    ID: string;
    ZahtjevID?: string;
    PotvrdaPrimitkaID?: string;
    PotvrdioPrimitakID?: string;
    VratioUPisarnicuID?: string;
    ZatrazioPotvrduPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaOdID?: string;
    PismenoID?: string;
    RazlogID?: string;
    ZatrazioPotvrduPrimitkaBrOznakaNazivUJNaziv?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PredmetNaziv?: string;
    PredmetID?: string;
    DatumZahtjeva?: Date;
    ZatrazioPotvrduPrimitkaOdBrOznakaNazivUJNaziv?: string;
    RazlogNaziv?: string;
    PotvrdioPrimitakBrOznakaNazivUJNaziv?: string;
    VratioUPisarnicuBrOznakaNazivUJNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    NapomenaUzPotvrduPrimitka?: string;
    DatumVracanjaUPisarnicu?: Date;
    RazlogVracanjaUPisarnicu?: string;
  }

  export const ZaposlenikDostavaURadExtendedInfo = createStructureInfo<
    DostavaURad.ZaposlenikDostavaURadExtended
  >('DostavaURad/ZaposlenikDostavaURadExtended');
  export interface ZaposlenikDostavaURadExtended {
    ID: string;
    ImePrezime?: string;
    BrojcanaOznaka?: string;
    NazivUJNaziv?: string;
    NazivUJNazivBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const InternaDostavnaKnjigaPismenoNazivFilterInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaPismenoNazivFilter
  >('DostavaURad/InternaDostavnaKnjigaPismenoNazivFilter');
  export interface InternaDostavnaKnjigaPismenoNazivFilter {
    Pattern?: string;
  }

  export const InternaDostavnaKnjigaSamoAktivnaPismenaFilterInfo = createStructureInfo<
    DostavaURad.InternaDostavnaKnjigaSamoAktivnaPismenaFilter
  >('DostavaURad/InternaDostavnaKnjigaSamoAktivnaPismenaFilter');
  export interface InternaDostavnaKnjigaSamoAktivnaPismenaFilter {}

  export const OvlasteniZaPotvrduPrimitkaBrowseInfo = createStructureInfo<
    DostavaURad.OvlasteniZaPotvrduPrimitkaBrowse
  >('DostavaURad/OvlasteniZaPotvrduPrimitkaBrowse');
  export interface OvlasteniZaPotvrduPrimitkaBrowse {
    ID: string;
    Active?: boolean;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    SluzbenikNaziv?: string;
    SluzbenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastenikNaziv?: string;
    OvlastenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastioNaziv?: string;
    OvlastioNazivUJNazivBrojcanaOznaka?: string;
    SluzbenikUstrojstvenaJedinicaID?: string;
    SluzbenikUstrojstvenaJedinicaRadomUpravljaID?: string;
  }

  export const PismenaZaPotvrduPrimitkaBaseInfo = createStructureInfo<
    DostavaURad.PismenaZaPotvrduPrimitkaBase
  >('DostavaURad/PismenaZaPotvrduPrimitkaBase');
  export interface PismenaZaPotvrduPrimitkaBase {
    ID: string;
    KreiraoID?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZahtjevZaID?: string;
    ZahtjevZaUstrojstvenaJedinicaID?: string;
    ZahtjevZaBrOznakaNazivUJNaziv?: string;
    RazlogID?: string;
    RazlogNaziv?: string;
    PismenoID?: string;
    PredmetID?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    DatumKreiranja?: Date;
    PZPP_WithRecompile?: boolean;
    EntityID?: string;
    PismenoBarkod?: string;
    GlavniPredmetID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const PismenaZaPotvrduPrimitkaBrowseInfo = createStructureInfo<
    DostavaURad.PismenaZaPotvrduPrimitkaBrowse
  >('DostavaURad/PismenaZaPotvrduPrimitkaBrowse');
  export interface PismenaZaPotvrduPrimitkaBrowse {
    ID: string;
    KreiraoID?: string;
    ZahtjevZaID?: string;
    RazlogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    ZahtjevZaBrOznakaNazivUJNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    RazlogNaziv?: string;
    PZPP_WithRecompile?: boolean;
    PredmetID?: string;
    EntityID?: string;
    PismenoBarkod?: string;
  }

  export const GetNepotvrdjeniZahtjeviZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.GetNepotvrdjeniZahtjeviZaPotvrduPrimitka
  >('DostavaURad/GetNepotvrdjeniZahtjeviZaPotvrduPrimitka');
  export interface GetNepotvrdjeniZahtjeviZaPotvrduPrimitka {}

  export const PotvrdePrimitkaZaKojeSamOvlastenInfo = createStructureInfo<
    DostavaURad.PotvrdePrimitkaZaKojeSamOvlasten
  >('DostavaURad/PotvrdePrimitkaZaKojeSamOvlasten');
  export interface PotvrdePrimitkaZaKojeSamOvlasten {}

  export const PismenaZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.PismenaZaPotvrduPrimitka
  >('DostavaURad/PismenaZaPotvrduPrimitka');
  export interface PismenaZaPotvrduPrimitka {
    ID: string;
    KreiraoID?: string;
    ZahtjevZaID?: string;
    RazlogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    PredmetID?: string;
    PZPP_WithRecompile?: boolean;
  }

  export const UpsertPotvrdaPrimitkaInfo = createStructureInfo<DostavaURad.UpsertPotvrdaPrimitka>(
    'DostavaURad/UpsertPotvrdaPrimitka'
  );
  export interface UpsertPotvrdaPrimitka {
    PotvrdaPrimitka: string;
  }

  export const UpsertZahtjevZaPotvrdomPrimitkaInfo = createStructureInfo<
    DostavaURad.UpsertZahtjevZaPotvrdomPrimitka
  >('DostavaURad/UpsertZahtjevZaPotvrdomPrimitka');
  export interface UpsertZahtjevZaPotvrdomPrimitka {
    ZahtjevZaPotvrdomPrimitka: string;
    SkipPermissionCheck?: boolean;
    KreirajSamoZaZadnjePismeno?: boolean;
  }

  export const UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitka
  >('DostavaURad/UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitka');
  export interface UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitka {
    Pismena: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitka
  >('DostavaURad/PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitka');
  export interface PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitka {
    Predmeti: string;
    KreirajZppSamoZaZadnjePismeno?: boolean;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const PredmetRasporedjivanjeSaPotvrdomPrimitkaPismenaInfo = createStructureInfo<
    DostavaURad.PredmetRasporedjivanjeSaPotvrdomPrimitkaPismena
  >('DostavaURad/PredmetRasporedjivanjeSaPotvrdomPrimitkaPismena');
  export interface PredmetRasporedjivanjeSaPotvrdomPrimitkaPismena {
    Pismena?: string;
    Zahtjevi?: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const UpsertPismenoSaZahtjevomZaPotvrduPrimitkaInfo = createStructureInfo<
    DostavaURad.UpsertPismenoSaZahtjevomZaPotvrduPrimitka
  >('DostavaURad/UpsertPismenoSaZahtjevomZaPotvrduPrimitka');
  export interface UpsertPismenoSaZahtjevomZaPotvrduPrimitka {
    Pismeno: string;
    PismenoPrilozi?: string;
    PismenoDodatneOznake?: string;
    PismenoSluzbeneBiljeske?: string;
    PismenoDodatneStranke?: string;
    TipPismenaID?: string;
    ForceInsert?: boolean;
    ForceUpdate?: boolean;
    StupanjTajnostiID?: string;
    KreiranoIzPismenaID?: string;
  }

  export const OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitkaInfo = createStructureInfo<
    DostavaURad.OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitka
  >('DostavaURad/OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitka');
  export interface OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitka {
    Predmet: string;
    Pismeno: string;
    PismenoDodatneStranke?: string;
    PredmetDodatneStranke?: string;
    PismenoDodatneOznake?: string;
    PredmetDodatneOznake?: string;
    PismenoPrilozi?: string;
    PismenoSluzbeneBiljeske?: string;
    TipPismenaID?: string;
    TipPredmetaID?: string;
    CustomOsnivanje?: boolean;
    PredmetStupanjTajnostiID?: string;
    PismenoStupanjTajnostiID?: string;
  }

  export const UstupanjePredmetaInfo = createStructureInfo<DostavaURad.UstupanjePredmeta>(
    'DostavaURad/UstupanjePredmeta'
  );
  export interface UstupanjePredmeta {
    ID: string;
    PredmetID: string;
    KreiraoID?: string;
    DaoUputuID?: string;
    Uputa?: string;
    UstrojstvenaJedinicaID: string;
    DatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    UNadleznostiID?: string;
  }

  export const ValidForUstupanjeInfo = createStructureInfo<DostavaURad.ValidForUstupanje>(
    'DostavaURad/ValidForUstupanje'
  );
  export interface ValidForUstupanje {}

  export const UpsertUstupanjePredmetaInfo = createStructureInfo<
    DostavaURad.UpsertUstupanjePredmeta
  >('DostavaURad/UpsertUstupanjePredmeta');
  export interface UpsertUstupanjePredmeta {
    UstupanjePredmeta: string;
    DodijeliMeKaoSuradnika?: boolean;
  }

  export const VracanjeUPisarnicuInfo = createStructureInfo<DostavaURad.VracanjeUPisarnicu>(
    'DostavaURad/VracanjeUPisarnicu'
  );
  export interface VracanjeUPisarnicu {
    ID: string;
    VratioUPisarnicuID?: string;
    RazlogVracanjaUPisarnicu: string;
    DatumVracanjaUPisarnicu?: Date;
  }

  export const RS_InternaDostavnaKnjiga_LookupZahtjevZaInfo = createStructureInfo<
    DostavaURad.RS_InternaDostavnaKnjiga_LookupZahtjevZa
  >('DostavaURad/RS_InternaDostavnaKnjiga_LookupZahtjevZa');
  export interface RS_InternaDostavnaKnjiga_LookupZahtjevZa {
    ID: string;
    Value?: string;
    Label?: string;
    RBR?: number;
  }

  export const RS_InternaDostavnaKnjiga_LookupPotvrdioInfo = createStructureInfo<
    DostavaURad.RS_InternaDostavnaKnjiga_LookupPotvrdio
  >('DostavaURad/RS_InternaDostavnaKnjiga_LookupPotvrdio');
  export interface RS_InternaDostavnaKnjiga_LookupPotvrdio {
    ID: string;
    Value?: string;
    Label?: string;
    RBR?: number;
  }

  export const DodjelaURadPredmetBrisanInfo = createStructureInfo<
    DostavaURad.DodjelaURadPredmetBrisan
  >('DostavaURad/DodjelaURadPredmetBrisan');
  export interface DodjelaURadPredmetBrisan {}

  export const DodjelaURadPredmetVezanInfo = createStructureInfo<
    DostavaURad.DodjelaURadPredmetVezan
  >('DostavaURad/DodjelaURadPredmetVezan');
  export interface DodjelaURadPredmetVezan {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmetInfo = createStructureInfo<
    DostavaURad.ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmet
  >('DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmet');
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmet {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismenoInfo = createStructureInfo<
    DostavaURad.ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismeno
  >('DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismeno');
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismeno {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismenaInfo = createStructureInfo<
    DostavaURad.ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismena
  >('DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismena');
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismena {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetBrisanInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaPredmetBrisan
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetBrisan');
  export interface ZahtjevZaPotvrdomPrimitkaPredmetBrisan {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmetaInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmeta
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmeta');
  export interface ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmeta {}

  export const ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisanInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisan
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisan');
  export interface ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisan {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetVezanInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaPredmetVezan
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetVezan');
  export interface ZahtjevZaPotvrdomPrimitkaPredmetVezan {}

  export const ZahtjevZaPotvrdomPrimitkaIstiPredmetIDInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaIstiPredmetID
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaIstiPredmetID');
  export interface ZahtjevZaPotvrdomPrimitkaIstiPredmetID {}

  export const DrugaUstrojstvenaJedinicaInfo = createStructureInfo<
    DostavaURad.DrugaUstrojstvenaJedinica
  >('DostavaURad/DrugaUstrojstvenaJedinica');
  export interface DrugaUstrojstvenaJedinica {}

  export const UstupanjePredmetaPredmetBrisanInfo = createStructureInfo<
    DostavaURad.UstupanjePredmetaPredmetBrisan
  >('DostavaURad/UstupanjePredmetaPredmetBrisan');
  export interface UstupanjePredmetaPredmetBrisan {}

  export const UstupanjePredmetaPredmetVezanInfo = createStructureInfo<
    DostavaURad.UstupanjePredmetaPredmetVezan
  >('DostavaURad/UstupanjePredmetaPredmetVezan');
  export interface UstupanjePredmetaPredmetVezan {}

  export const ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActaInfo = createStructureInfo<
    DostavaURad.ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActa
  >('DostavaURad/ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActa');
  export interface ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActa {}

  export const InvalidStupanjTajnostiInfo = createStructureInfo<DostavaURad.InvalidStupanjTajnosti>(
    'DostavaURad/InvalidStupanjTajnosti'
  );
  export interface InvalidStupanjTajnosti {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    DostavaURad.SystemRequiredDatumKreiranja
  >('DostavaURad/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDatumPotvrdePrimitkaInfo = createStructureInfo<
    DostavaURad.SystemRequiredDatumPotvrdePrimitka
  >('DostavaURad/SystemRequiredDatumPotvrdePrimitka');
  export interface SystemRequiredDatumPotvrdePrimitka {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<DostavaURad.SystemRequiredKreirao>(
    'DostavaURad/SystemRequiredKreirao'
  );
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumVracanjaUPisarnicuInfo = createStructureInfo<
    DostavaURad.SystemRequiredDatumVracanjaUPisarnicu
  >('DostavaURad/SystemRequiredDatumVracanjaUPisarnicu');
  export interface SystemRequiredDatumVracanjaUPisarnicu {}

  export const SystemRequiredActiveInfo = createStructureInfo<DostavaURad.SystemRequiredActive>(
    'DostavaURad/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}
}

export module KnjigaPrimljenePoste {
  export const PosiljkaInfo = createStructureInfo<KnjigaPrimljenePoste.Posiljka>(
    'KnjigaPrimljenePoste/Posiljka'
  );
  export interface Posiljka {
    ID: string;
    RedniBroj?: number;
    EvidencijskiBroj?: string;
    Naziv?: string;
    DatumPrimitka: Date;
    BrojPreporuke?: string;
    PosiljateljID?: string;
    Hitno: boolean;
    PostojiSumnjaONeovlastenomIliZlonamjernomOtvaranju: boolean;
    OmotnicaZaprimljenaOstecena: boolean;
    EvidencijskaOznakaZapisnikaOKomisijskomNalazu?: string;
    Napomena?: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    TipPosiljkeID?: string;
    PrimateljID: string;
    LokacijaID?: string;
    Active?: boolean;
  }

  export const PosiljkaRedniBrojGodinaInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaRedniBrojGodina
  >('KnjigaPrimljenePoste/PosiljkaRedniBrojGodina');
  export interface PosiljkaRedniBrojGodina {
    ID: string;
    RedniBrojMax?: number;
    Godina?: number;
  }

  export const PodaciZaGeneriranjeEvidencijskogBrojaInfo = createStructureInfo<
    KnjigaPrimljenePoste.PodaciZaGeneriranjeEvidencijskogBroja
  >('KnjigaPrimljenePoste/PodaciZaGeneriranjeEvidencijskogBroja');
  export interface PodaciZaGeneriranjeEvidencijskogBroja {
    ID: string;
    PosiljkaID?: string;
    DatumPrimitka?: Date;
    GodinaPrimitka?: number;
    VrstaGeneriranjaEvidencijskogBroja?: number;
    DatumPrimjeneVrsteGeneriranjaEvidencijskogBroja?: Date;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const GenerirajEvidencijskiBrojInfo = createStructureInfo<
    KnjigaPrimljenePoste.GenerirajEvidencijskiBroj
  >('KnjigaPrimljenePoste/GenerirajEvidencijskiBroj');
  export interface GenerirajEvidencijskiBroj {
    ID: string;
    EvidencijskiBroj?: string;
    RedniBroj?: number;
  }

  export const VrstaGeneriranjaEvidencijskogBrojaInfo = createStructureInfo<
    KnjigaPrimljenePoste.VrstaGeneriranjaEvidencijskogBroja
  >('KnjigaPrimljenePoste/VrstaGeneriranjaEvidencijskogBroja');
  export interface VrstaGeneriranjaEvidencijskogBroja {
    ID: string;
    Sifra: number;
    Opis: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBrojaInfo = createStructureInfo<
    KnjigaPrimljenePoste.OdabranaVrstaGeneriranjaEvidencijskogBroja
  >('KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja');
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja {
    ID: string;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
    ActiveSince?: Date;
  }

  export const PotvrdaPrimitkaPosiljkeInfo = createStructureInfo<
    KnjigaPrimljenePoste.PotvrdaPrimitkaPosiljke
  >('KnjigaPrimljenePoste/PotvrdaPrimitkaPosiljke');
  export interface PotvrdaPrimitkaPosiljke {
    ID: string;
    Napomena?: string;
    DatumPotvrde?: Date;
    PrimitakPotvrdioID?: string;
  }

  export const PosiljkaValidForPotvrdaPrimitkaInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaValidForPotvrdaPrimitka
  >('KnjigaPrimljenePoste/PosiljkaValidForPotvrdaPrimitka');
  export interface PosiljkaValidForPotvrdaPrimitka {}

  export const PosiljkaBrowseBaseInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaBrowseBase
  >('KnjigaPrimljenePoste/PosiljkaBrowseBase');
  export interface PosiljkaBrowseBase {
    ID: string;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    DatumNapomena?: string;
    PrimitakPotvrdioBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PrimitakPotvrdioID?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
  }

  export const PosiljkaBrowseInfo = createStructureInfo<KnjigaPrimljenePoste.PosiljkaBrowse>(
    'KnjigaPrimljenePoste/PosiljkaBrowse'
  );
  export interface PosiljkaBrowse {
    ID: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    BrojPreporuke?: string;
    Napomena?: string;
    PrimateljID?: string;
    PosiljateljID?: string;
    LokacijaID?: string;
    TipPosiljkeID?: string;
    Active?: boolean;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    DatumNapomena?: string;
    PrimitakPotvrdioBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PrimitakPotvrdioID?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
  }

  export const PregledPosiljkiBrowseInfo = createStructureInfo<
    KnjigaPrimljenePoste.PregledPosiljkiBrowse
  >('KnjigaPrimljenePoste/PregledPosiljkiBrowse');
  export interface PregledPosiljkiBrowse {
    ID: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    PrimateljID?: string;
    Active?: boolean;
    Napomena?: string;
    BrojPreporuke?: string;
    DatumPotvrdePrimitka?: Date;
    PrimitakPotvrdioID?: string;
    PosiljateljNazivMjesto?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const PosiljkaZaPotvrduPrimitkaBrowseInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaZaPotvrduPrimitkaBrowse
  >('KnjigaPrimljenePoste/PosiljkaZaPotvrduPrimitkaBrowse');
  export interface PosiljkaZaPotvrduPrimitkaBrowse {
    ID: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    BrojPreporuke?: string;
    Active?: boolean;
    Napomena?: string;
    PrimateljID?: string;
    DatumNapomena?: string;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
  }

  export const ZaPotvrduInfo = createStructureInfo<KnjigaPrimljenePoste.ZaPotvrdu>(
    'KnjigaPrimljenePoste/ZaPotvrdu'
  );
  export interface ZaPotvrdu {}

  export const ZaPotvrduCountInfo = createStructureInfo<KnjigaPrimljenePoste.ZaPotvrduCount>(
    'KnjigaPrimljenePoste/ZaPotvrduCount'
  );
  export interface ZaPotvrduCount {}

  export const TipPosiljkeInfo = createStructureInfo<KnjigaPrimljenePoste.TipPosiljke>(
    'KnjigaPrimljenePoste/TipPosiljke'
  );
  export interface TipPosiljke {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const PosiljkaFtsInfo = createStructureInfo<KnjigaPrimljenePoste.PosiljkaFts>(
    'KnjigaPrimljenePoste/PosiljkaFts'
  );
  export interface PosiljkaFts {
    ID: string;
    FtsContent?: string;
  }

  export const PosiljkaFtsComputedInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaFtsComputed
  >('KnjigaPrimljenePoste/PosiljkaFtsComputed');
  export interface PosiljkaFtsComputed {
    ID: string;
    FtsContent?: string;
  }

  export const PosiljkaPermissionsInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaPermissions
  >('KnjigaPrimljenePoste/PosiljkaPermissions');
  export interface PosiljkaPermissions {
    PosiljkaID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PermissionPosiljkaPrimateljDirektanPrimateljID?: string;
    PermissionPosiljkaPravoRadaUJPravoRadaUJID?: string;
    PermissionPosiljkaPravoUvidaUJPravuUvidaUJID?: string;
    PermissionPosiljkaPravoUvidaZaposlenikPravuUvidaZaposlenikID?: string;
    PermissionPosiljkaPravoRadaZaposlenikPravuRadaZaposlenikID?: string;
    PermissionPosiljkaRadomUpravljaRadomUpravljaID?: string;
    PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijelaOvlasteniSluzbenikRadnogTijelaID?: string;
    PermissionPosiljkaPrimateljRadnoTijeloZaposlenikRadnogTijelaID?: string;
  }

  export const PermissionPosiljkaPrimateljInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPrimatelj
  >('KnjigaPrimljenePoste/PermissionPosiljkaPrimatelj');
  export interface PermissionPosiljkaPrimatelj {
    ID: string;
  }

  export const PermissionPosiljkaPravoRadaUJInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPravoRadaUJ
  >('KnjigaPrimljenePoste/PermissionPosiljkaPravoRadaUJ');
  export interface PermissionPosiljkaPravoRadaUJ {
    ID: string;
  }

  export const PermissionPosiljkaPravoUvidaUJInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPravoUvidaUJ
  >('KnjigaPrimljenePoste/PermissionPosiljkaPravoUvidaUJ');
  export interface PermissionPosiljkaPravoUvidaUJ {
    ID: string;
  }

  export const PermissionPosiljkaPravoUvidaZaposlenikInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPravoUvidaZaposlenik
  >('KnjigaPrimljenePoste/PermissionPosiljkaPravoUvidaZaposlenik');
  export interface PermissionPosiljkaPravoUvidaZaposlenik {
    ID: string;
  }

  export const PermissionPosiljkaPravoRadaZaposlenikInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPravoRadaZaposlenik
  >('KnjigaPrimljenePoste/PermissionPosiljkaPravoRadaZaposlenik');
  export interface PermissionPosiljkaPravoRadaZaposlenik {
    ID: string;
  }

  export const PermissionPosiljkaRadomUpravljaInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaRadomUpravlja
  >('KnjigaPrimljenePoste/PermissionPosiljkaRadomUpravlja');
  export interface PermissionPosiljkaRadomUpravlja {
    ID: string;
  }

  export const PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijelaInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijela
  >('KnjigaPrimljenePoste/PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijela');
  export interface PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijela {
    ID: string;
  }

  export const PermissionPosiljkaPrimateljRadnoTijeloInfo = createStructureInfo<
    KnjigaPrimljenePoste.PermissionPosiljkaPrimateljRadnoTijelo
  >('KnjigaPrimljenePoste/PermissionPosiljkaPrimateljRadnoTijelo');
  export interface PermissionPosiljkaPrimateljRadnoTijelo {
    ID: string;
  }

  export const PosiljkaBrowseSearchInfo = createStructureInfo<
    KnjigaPrimljenePoste.PosiljkaBrowseSearch
  >('KnjigaPrimljenePoste/PosiljkaBrowseSearch');
  export interface PosiljkaBrowseSearch {
    Pattern?: string;
    EvidencijskiBroj?: string;
    EvidencijskiBrojDo?: number;
    DatumPrimitkaOd?: Date;
    DatumPrimitkaDo?: Date;
    Posiljatelj?: string;
    Primatelj?: string;
    LokacijaPrimateljaIDs?: string;
    NazivPosiljke?: string;
    TipPosiljkeIDs?: string;
    BrojPreporuke?: string;
    Hitno?: boolean;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    Napomena?: string;
  }

  export const PrimateljInfo = createStructureInfo<KnjigaPrimljenePoste.Primatelj>(
    'KnjigaPrimljenePoste/Primatelj'
  );
  export interface Primatelj {
    ID: string;
    Naziv?: string;
    UserName?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    UstrojstvenaJedinicaID?: string;
  }

  export const PrimateljBrOznakaNazivUJNazivQuickSearchInfo = createStructureInfo<
    KnjigaPrimljenePoste.PrimateljBrOznakaNazivUJNazivQuickSearch
  >('KnjigaPrimljenePoste/PrimateljBrOznakaNazivUJNazivQuickSearch');
  export interface PrimateljBrOznakaNazivUJNazivQuickSearch {
    Pattern?: string;
  }

  export const ReferenceNonexistentPrimateljInfo = createStructureInfo<
    KnjigaPrimljenePoste.ReferenceNonexistentPrimatelj
  >('KnjigaPrimljenePoste/ReferenceNonexistentPrimatelj');
  export interface ReferenceNonexistentPrimatelj {}

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesInfo = createStructureInfo<
    KnjigaPrimljenePoste.OdabranaVrstaGeneriranjaEvidencijskogBroja_Changes
  >('KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_Changes');
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_Changes {
    ID: string;
    EntityID: string;
    ActiveSince?: Date;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_HistoryInfo = createStructureInfo<
    KnjigaPrimljenePoste.OdabranaVrstaGeneriranjaEvidencijskogBroja_History
  >('KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_History');
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_History {
    ID: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
  }

  export const PosiljkaLookupInfo = createStructureInfo<KnjigaPrimljenePoste.PosiljkaLookup>(
    'KnjigaPrimljenePoste/PosiljkaLookup'
  );
  export interface PosiljkaLookup {
    ID: string;
    EvidencijskiBroj?: string;
  }

  export const VrstaGeneriranjaEvidencijskogBrojaLookupInfo = createStructureInfo<
    KnjigaPrimljenePoste.VrstaGeneriranjaEvidencijskogBrojaLookup
  >('KnjigaPrimljenePoste/VrstaGeneriranjaEvidencijskogBrojaLookup');
  export interface VrstaGeneriranjaEvidencijskogBrojaLookup {
    ID: string;
    Sifra?: number;
    Opis?: string;
  }

  export const TipPosiljkeLookupInfo = createStructureInfo<KnjigaPrimljenePoste.TipPosiljkeLookup>(
    'KnjigaPrimljenePoste/TipPosiljkeLookup'
  );
  export interface TipPosiljkeLookup {
    ID: string;
    Naziv?: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntilInfo = createStructureInfo<
    KnjigaPrimljenePoste.OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntil
  >('KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntil');
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntil {
    ID: string;
    ActiveUntil?: Date;
  }

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredDatumKreiranja
  >('KnjigaPrimljenePoste/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredKreirao
  >('KnjigaPrimljenePoste/SystemRequiredKreirao');
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumPotvrdeInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredDatumPotvrde
  >('KnjigaPrimljenePoste/SystemRequiredDatumPotvrde');
  export interface SystemRequiredDatumPotvrde {}

  export const SystemRequiredPrimitakPotvrdioInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredPrimitakPotvrdio
  >('KnjigaPrimljenePoste/SystemRequiredPrimitakPotvrdio');
  export interface SystemRequiredPrimitakPotvrdio {}

  export const SystemRequiredActiveInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredActive
  >('KnjigaPrimljenePoste/SystemRequiredActive');
  export interface SystemRequiredActive {}

  export const SystemRequiredEntityInfo = createStructureInfo<
    KnjigaPrimljenePoste.SystemRequiredEntity
  >('KnjigaPrimljenePoste/SystemRequiredEntity');
  export interface SystemRequiredEntity {}
}

export module Ocr {
  export const OcrStartedInfo = createStructureInfo<Ocr.OcrStarted>('Ocr/OcrStarted');
  export interface OcrStarted {
    ID: string;
    DocumentID: string;
    DocumentVersion: number;
    DatumKreiranja?: Date;
  }

  export const OcrCompletedInfo = createStructureInfo<Ocr.OcrCompleted>('Ocr/OcrCompleted');
  export interface OcrCompleted {
    ID: string;
    OcrID: string;
    DatumZavrsetka?: Date;
  }

  export const OcrErrorInfo = createStructureInfo<Ocr.OcrError>('Ocr/OcrError');
  export interface OcrError {
    ID: string;
    DocumentID: string;
    DocumentVersion: number;
    DatumGreske?: Date;
    RazlogGreske?: string;
  }

  export const DeleteOldErrorsInfo = createStructureInfo<Ocr.DeleteOldErrors>(
    'Ocr/DeleteOldErrors'
  );
  export interface DeleteOldErrors {}

  export const OcrNextDocumentsInfo = createStructureInfo<Ocr.OcrNextDocuments>(
    'Ocr/OcrNextDocuments'
  );
  export interface OcrNextDocuments {
    ID: string;
    DocumentID?: string;
    DocumentVersion?: number;
    DmsProvider?: string;
  }

  export const ComputePismenoFTSKljucneRijeciInfo = createStructureInfo<
    Ocr.ComputePismenoFTSKljucneRijeci
  >('Ocr/ComputePismenoFTSKljucneRijeci');
  export interface ComputePismenoFTSKljucneRijeci {
    ID: string;
    KljucneRijeci?: string;
  }

  export const OcrPismenoInfo = createStructureInfo<Ocr.OcrPismeno>('Ocr/OcrPismeno');
  export interface OcrPismeno {
    ID: string;
    KljucneRijeci: string;
  }

  export const OcrPismenoFTSInfo = createStructureInfo<Ocr.OcrPismenoFTS>('Ocr/OcrPismenoFTS');
  export interface OcrPismenoFTS {
    ID: string;
    KljucneRijeci?: string;
  }

  export const ComputePrilogFTSKljucneRijeciInfo = createStructureInfo<
    Ocr.ComputePrilogFTSKljucneRijeci
  >('Ocr/ComputePrilogFTSKljucneRijeci');
  export interface ComputePrilogFTSKljucneRijeci {
    ID: string;
    KljucneRijeci?: string;
  }

  export const OcrPrilogInfo = createStructureInfo<Ocr.OcrPrilog>('Ocr/OcrPrilog');
  export interface OcrPrilog {
    ID: string;
    KljucneRijeci: string;
  }

  export const OcrPrilogFTSInfo = createStructureInfo<Ocr.OcrPrilogFTS>('Ocr/OcrPrilogFTS');
  export interface OcrPrilogFTS {
    ID: string;
    KljucneRijeci?: string;
  }
}

export module Otprema2 {
  export const GrupaPrimateljaInfo = createStructureInfo<Otprema2.GrupaPrimatelja>(
    'Otprema2/GrupaPrimatelja'
  );
  export interface GrupaPrimatelja {
    ID: string;
    Naziv: string;
    KopiranoIzGrupePrimateljaID?: string;
    MedunarodniPromet: boolean;
  }

  export const GrupaPrimateljaBrowseInfo = createStructureInfo<Otprema2.GrupaPrimateljaBrowse>(
    'Otprema2/GrupaPrimateljaBrowse'
  );
  export interface GrupaPrimateljaBrowse {
    ID: string;
    Naziv?: string;
    MedunarodniPromet?: boolean;
  }

  export const ClanGrupePrimateljaInfo = createStructureInfo<Otprema2.ClanGrupePrimatelja>(
    'Otprema2/ClanGrupePrimatelja'
  );
  export interface ClanGrupePrimatelja {
    ID: string;
    GrupaPrimateljaID?: string;
    KontaktID: string;
  }

  export const ClanGrupePrimateljaBrowseInfo = createStructureInfo<
    Otprema2.ClanGrupePrimateljaBrowse
  >('Otprema2/ClanGrupePrimateljaBrowse');
  export interface ClanGrupePrimateljaBrowse {
    ID: string;
    GrupaPrimateljaID?: string;
    KontaktID?: string;
    Subjekt?: string;
    Mjesto?: string;
    Adresa?: string;
  }

  export const InsertPosiljkaInfo = createStructureInfo<Otprema2.InsertPosiljka>(
    'Otprema2/InsertPosiljka'
  );
  export interface InsertPosiljka {
    Broj?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    SadrzajIDsJsonList?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
    NaseljeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    PrimateljID?: string;
    UputaZaOtpremuID?: string;
  }

  export const KorisnickePostavkeInfo = createStructureInfo<Otprema2.KorisnickePostavke>(
    'Otprema2/KorisnickePostavke'
  );
  export interface KorisnickePostavke {
    ID: string;
    ZaposlenikID: string;
    IspisOmotniceNakonSpremanja?: boolean;
    IsVagaEnabled?: boolean;
    VagaUrl?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const KorisnickePostavke_ValidForUpsertInfo = createStructureInfo<
    Otprema2.KorisnickePostavke_ValidForUpsert
  >('Otprema2/KorisnickePostavke_ValidForUpsert');
  export interface KorisnickePostavke_ValidForUpsert {}

  export const KorisnickePostavkeVrstaPosiljkeDodatnaUslugaInfo = createStructureInfo<
    Otprema2.KorisnickePostavkeVrstaPosiljkeDodatnaUsluga
  >('Otprema2/KorisnickePostavkeVrstaPosiljkeDodatnaUsluga');
  export interface KorisnickePostavkeVrstaPosiljkeDodatnaUsluga {
    ID: string;
    KorisnickePostavkeID: string;
    VrstaPosiljkeDodatnaUslugaID: string;
  }

  export const KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsertInfo = createStructureInfo<
    Otprema2.KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsert
  >('Otprema2/KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsert');
  export interface KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsert {}

  export const GetKorisnickePostavkeComputedInfo = createStructureInfo<
    Otprema2.GetKorisnickePostavkeComputed
  >('Otprema2/GetKorisnickePostavkeComputed');
  export interface GetKorisnickePostavkeComputed {
    ID: string;
    ZaposlenikID?: string;
    TipPrimateljaID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    IsVagaEnabled?: boolean;
    VagaUrl?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
  }

  export const InsertKorisnickePostavkeInfo = createStructureInfo<
    Otprema2.InsertKorisnickePostavke
  >('Otprema2/InsertKorisnickePostavke');
  export interface InsertKorisnickePostavke {
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const UpsertKorisnickePostavkeInfo = createStructureInfo<
    Otprema2.UpsertKorisnickePostavke
  >('Otprema2/UpsertKorisnickePostavke');
  export interface UpsertKorisnickePostavke {
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const SetIspisOmotniceNakonSpremanjaInfo = createStructureInfo<
    Otprema2.SetIspisOmotniceNakonSpremanja
  >('Otprema2/SetIspisOmotniceNakonSpremanja');
  export interface SetIspisOmotniceNakonSpremanja {
    IspisOmotniceNakonSpremanja?: boolean;
  }

  export const VrstaPosiljkeInfo = createStructureInfo<Otprema2.VrstaPosiljke>(
    'Otprema2/VrstaPosiljke'
  );
  export interface VrstaPosiljke {
    ID: string;
    Naziv: string;
    PruzateljUslugeID: string;
    Active?: boolean;
  }

  export const VrstaPosiljkeLookupInfo = createStructureInfo<Otprema2.VrstaPosiljkeLookup>(
    'Otprema2/VrstaPosiljkeLookup'
  );
  export interface VrstaPosiljkeLookup {
    ID: string;
    Naziv?: string;
    PruzateljUslugeID?: string;
    Active?: boolean;
  }

  export const VrstaPosiljkeByDodatnaUslugaInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeByDodatnaUsluga
  >('Otprema2/VrstaPosiljkeByDodatnaUsluga');
  export interface VrstaPosiljkeByDodatnaUsluga {
    DodatnaUslugaID?: string;
  }

  export const VrstaPosiljkeByPruzateljUslugeInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeByPruzateljUsluge
  >('Otprema2/VrstaPosiljkeByPruzateljUsluge');
  export interface VrstaPosiljkeByPruzateljUsluge {
    PruzateljUslugeID?: string;
  }

  export const VrstaPosiljkeByPruzateljUslugeNonExclusiveInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeByPruzateljUslugeNonExclusive
  >('Otprema2/VrstaPosiljkeByPruzateljUslugeNonExclusive');
  export interface VrstaPosiljkeByPruzateljUslugeNonExclusive {
    PruzateljUslugeID?: string;
  }

  export const VrstaPosiljkeBrowseInfo = createStructureInfo<Otprema2.VrstaPosiljkeBrowse>(
    'Otprema2/VrstaPosiljkeBrowse'
  );
  export interface VrstaPosiljkeBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
    PruzateljUsluge?: string;
  }

  export const PruzateljUslugeInfo = createStructureInfo<Otprema2.PruzateljUsluge>(
    'Otprema2/PruzateljUsluge'
  );
  export interface PruzateljUsluge {
    ID: string;
    Naziv: string;
    Active?: boolean;
  }

  export const PruzateljUslugeBrowseInfo = createStructureInfo<Otprema2.PruzateljUslugeBrowse>(
    'Otprema2/PruzateljUslugeBrowse'
  );
  export interface PruzateljUslugeBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const IspisOmotniceInfo = createStructureInfo<Otprema2.IspisOmotnice>(
    'Otprema2/IspisOmotnice'
  );
  export interface IspisOmotnice {
    ID: string;
    Naziv: string;
    NazivIzvjestaja?: string;
    Active?: boolean;
  }

  export const IspisOmotniceBrowseInfo = createStructureInfo<Otprema2.IspisOmotniceBrowse>(
    'Otprema2/IspisOmotniceBrowse'
  );
  export interface IspisOmotniceBrowse {
    ID: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const DodatnaUslugaInfo = createStructureInfo<Otprema2.DodatnaUsluga>(
    'Otprema2/DodatnaUsluga'
  );
  export interface DodatnaUsluga {
    ID: string;
    Naziv: string;
    PruzateljUslugeID: string;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
    IspisOmotniceID?: string;
    Active?: boolean;
  }

  export const DodatnaUslugaLookupInfo = createStructureInfo<Otprema2.DodatnaUslugaLookup>(
    'Otprema2/DodatnaUslugaLookup'
  );
  export interface DodatnaUslugaLookup {
    ID: string;
    Naziv?: string;
  }

  export const FilterByVrstaPosiljkeIDsInfo = createStructureInfo<
    Otprema2.FilterByVrstaPosiljkeIDs
  >('Otprema2/FilterByVrstaPosiljkeIDs');
  export interface FilterByVrstaPosiljkeIDs {
    VrstePosiljakaIDs?: string;
  }

  export const DodatnaUslugaBrowseInfo = createStructureInfo<Otprema2.DodatnaUslugaBrowse>(
    'Otprema2/DodatnaUslugaBrowse'
  );
  export interface DodatnaUslugaBrowse {
    ID: string;
    Naziv?: string;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
    Active?: boolean;
    PruzateljUsluge?: string;
  }

  export const FilterByVrstaPosiljkeIDInfo = createStructureInfo<Otprema2.FilterByVrstaPosiljkeID>(
    'Otprema2/FilterByVrstaPosiljkeID'
  );
  export interface FilterByVrstaPosiljkeID {
    VrstaPosiljkeID?: string;
  }

  export const FilterByLokacijaAndVrstaPosiljkeIDInfo = createStructureInfo<
    Otprema2.FilterByLokacijaAndVrstaPosiljkeID
  >('Otprema2/FilterByLokacijaAndVrstaPosiljkeID');
  export interface FilterByLokacijaAndVrstaPosiljkeID {
    VrstaPosiljkeID?: string;
    NaseljeID?: string;
  }

  export const VrstaPosiljkeDodatnaUslugaInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeDodatnaUsluga
  >('Otprema2/VrstaPosiljkeDodatnaUsluga');
  export interface VrstaPosiljkeDodatnaUsluga {
    ID: string;
    VrstaPosiljkeID: string;
    DodatnaUslugaID: string;
    IsUnutarnjiPromet?: boolean;
  }

  export const VrstaPosiljkeDodatnaUslugaLookupInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeDodatnaUslugaLookup
  >('Otprema2/VrstaPosiljkeDodatnaUslugaLookup');
  export interface VrstaPosiljkeDodatnaUslugaLookup {
    ID: string;
    VrstaPosiljkeID?: string;
    IsUnutarnjiPromet?: boolean;
    DodatnaUslugaNaziv?: string;
    Active?: boolean;
  }

  export const VrstaPosiljkeDodatnaUslugaBrowseInfo = createStructureInfo<
    Otprema2.VrstaPosiljkeDodatnaUslugaBrowse
  >('Otprema2/VrstaPosiljkeDodatnaUslugaBrowse');
  export interface VrstaPosiljkeDodatnaUslugaBrowse {
    ID: string;
    DodatnaUslugaID?: string;
    IsUnutarnjiPromet?: boolean;
    VrstaPosiljke?: string;
  }

  export const CjenikInfo = createStructureInfo<Otprema2.Cjenik>('Otprema2/Cjenik');
  export interface Cjenik {
    ID: string;
    VrstaPosiljkeID: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    CijenaUnutarnjiPromet?: number;
    CijenaUnutarnjiPrometPostotak?: number;
    CijenaMedjunarodniPromet?: number;
  }

  export const GetCjenikForInfo = createStructureInfo<Otprema2.GetCjenikFor>(
    'Otprema2/GetCjenikFor'
  );
  export interface GetCjenikFor {
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    Masa?: number;
    Vrijednost?: number;
  }

  export const CjenikBrowseInfo = createStructureInfo<Otprema2.CjenikBrowse>(
    'Otprema2/CjenikBrowse'
  );
  export interface CjenikBrowse {
    ID: string;
    VrstaPosiljkeID?: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    CijenaUnutarnjiPromet?: number;
    CijenaUnutarnjiPrometPostotak?: number;
    CijenaMedjunarodniPromet?: number;
    VrstaPosiljke?: string;
    PruzateljUsluge?: string;
  }

  export const DohvatiUkupnuCijenuPosiljkeInfo = createStructureInfo<
    Otprema2.DohvatiUkupnuCijenuPosiljke
  >('Otprema2/DohvatiUkupnuCijenuPosiljke');
  export interface DohvatiUkupnuCijenuPosiljke {
    ID: string;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    DodatnaUslugaID?: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    Naziv?: string;
    CijenaUnutarnjiPromet?: number;
    CijenaUnutarnjiPrometPostotak?: number;
    CijenaMedjunarodniPromet?: number;
  }

  export const DohvatiUkupnuCijenuPosiljkeComputedInfo = createStructureInfo<
    Otprema2.DohvatiUkupnuCijenuPosiljkeComputed
  >('Otprema2/DohvatiUkupnuCijenuPosiljkeComputed');
  export interface DohvatiUkupnuCijenuPosiljkeComputed {
    ID: string;
    UkupnaCijena?: number;
  }

  export const DohvatiUkupnuCijenuPosiljkeComputedGetFilterInfo = createStructureInfo<
    Otprema2.DohvatiUkupnuCijenuPosiljkeComputedGetFilter
  >('Otprema2/DohvatiUkupnuCijenuPosiljkeComputedGetFilter');
  export interface DohvatiUkupnuCijenuPosiljkeComputedGetFilter {
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeDodatneUslugeIDs?: string;
    Masa?: number;
    Vrijednost?: number;
    NaseljePrimateljaID?: string;
    PrimateljID?: string;
  }

  export const DohvatiParametreZaIzvjestajePosiljkeComputedInfo = createStructureInfo<
    Otprema2.DohvatiParametreZaIzvjestajePosiljkeComputed
  >('Otprema2/DohvatiParametreZaIzvjestajePosiljkeComputed');
  export interface DohvatiParametreZaIzvjestajePosiljkeComputed {
    ID: string;
    Ids?: string;
    IspisOmotniceID?: string;
    UrlParams?: string;
    Info?: string;
    Error?: string;
  }

  export const DohvatiParametreZaIzvjestajePosiljkeInfo = createStructureInfo<
    Otprema2.DohvatiParametreZaIzvjestajePosiljke
  >('Otprema2/DohvatiParametreZaIzvjestajePosiljke');
  export interface DohvatiParametreZaIzvjestajePosiljke {
    PosiljkeIDs?: string;
  }

  export const PosiljkaInfo = createStructureInfo<Otprema2.Posiljka>('Otprema2/Posiljka');
  export interface Posiljka {
    ID: string;
    Broj?: string;
    VrstaPosiljkeID: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    FTSID?: number;
    PrimateljID: string;
  }

  export const ValidForKreiranjeInfo = createStructureInfo<Otprema2.ValidForKreiranje>(
    'Otprema2/ValidForKreiranje'
  );
  export interface ValidForKreiranje {}

  export const SadrzajPosiljkeNeaktivanPosiljkaSaveInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkeNeaktivanPosiljkaSave
  >('Otprema2/SadrzajPosiljkeNeaktivanPosiljkaSave');
  export interface SadrzajPosiljkeNeaktivanPosiljkaSave {}

  export const PosiljkaDetailsInfo = createStructureInfo<Otprema2.PosiljkaDetails>(
    'Otprema2/PosiljkaDetails'
  );
  export interface PosiljkaDetails {
    ID: string;
    PosiljkaJson?: string;
    PruzateljUslugeID?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDs?: string;
  }

  export const GetPosiljkaDetailsInfo = createStructureInfo<Otprema2.GetPosiljkaDetails>(
    'Otprema2/GetPosiljkaDetails'
  );
  export interface GetPosiljkaDetails {
    PosiljkaID?: string;
  }

  export const PosiljkaNewDetailsInfo = createStructureInfo<Otprema2.PosiljkaNewDetails>(
    'Otprema2/PosiljkaNewDetails'
  );
  export interface PosiljkaNewDetails {
    ID: string;
    PosiljkaJson?: string;
    PruzateljUslugeID?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDs?: string;
    SadrzajIDsJsonList?: string;
  }

  export const GetByUputaZaOtpremuInfo = createStructureInfo<Otprema2.GetByUputaZaOtpremu>(
    'Otprema2/GetByUputaZaOtpremu'
  );
  export interface GetByUputaZaOtpremu {
    UputaZaOtpremuID?: string;
  }

  export const ZadnjeKreiranePosiljkeZaposlenikInfo = createStructureInfo<
    Otprema2.ZadnjeKreiranePosiljkeZaposlenik
  >('Otprema2/ZadnjeKreiranePosiljkeZaposlenik');
  export interface ZadnjeKreiranePosiljkeZaposlenik {
    ID: string;
    PosiljkaID?: string;
    ZaposlenikID?: string;
  }

  export const GetZadnjeKreiranePosiljkeComputedInfo = createStructureInfo<
    Otprema2.GetZadnjeKreiranePosiljkeComputed
  >('Otprema2/GetZadnjeKreiranePosiljkeComputed');
  export interface GetZadnjeKreiranePosiljkeComputed {
    ID: string;
  }

  export const PosiljkaAdresaSubjektInfo = createStructureInfo<Otprema2.PosiljkaAdresaSubjekt>(
    'Otprema2/PosiljkaAdresaSubjekt'
  );
  export interface PosiljkaAdresaSubjekt {
    ID: string;
    NP?: string;
    UlicaIKucniBroj?: string;
    NaseljeID: string;
  }

  export const PosiljkaAdresaLokacijaInfo = createStructureInfo<Otprema2.PosiljkaAdresaLokacija>(
    'Otprema2/PosiljkaAdresaLokacija'
  );
  export interface PosiljkaAdresaLokacija {
    ID: string;
    NP?: string;
    LokacijaID: string;
  }

  export const SetPosiljkeAdresaSubjektInfo = createStructureInfo<
    Otprema2.SetPosiljkeAdresaSubjekt
  >('Otprema2/SetPosiljkeAdresaSubjekt');
  export interface SetPosiljkeAdresaSubjekt {
    PosiljkeIDsJson?: string;
    PosiljkaAdresaSubjektJson?: string;
    SetAsDetaultSubjektAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
  }

  export const SetPosiljkeAdresaInfo = createStructureInfo<Otprema2.SetPosiljkeAdresa>(
    'Otprema2/SetPosiljkeAdresa'
  );
  export interface SetPosiljkeAdresa {
    PosiljkeIDsJson?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
  }

  export const PosiljkaAdresaComputedInfo = createStructureInfo<Otprema2.PosiljkaAdresaComputed>(
    'Otprema2/PosiljkaAdresaComputed'
  );
  export interface PosiljkaAdresaComputed {
    ID: string;
    NazivPrimatelja?: string;
    UlicaIKucniBroj?: string;
    Naselje?: string;
    Mjesto?: string;
    DrzavaKratkiNaziv?: string;
    PostanskiBroj?: string;
    OdredisniUred?: string;
    PunaAdresa?: string;
    NP?: string;
    NazivPrimateljaPunaAdresaRs?: string;
  }

  export const PosiljkaAdresaPersistedInfo = createStructureInfo<Otprema2.PosiljkaAdresaPersisted>(
    'Otprema2/PosiljkaAdresaPersisted'
  );
  export interface PosiljkaAdresaPersisted {
    ID: string;
    NazivPrimatelja?: string;
    UlicaIKucniBroj?: string;
    Naselje?: string;
    Mjesto?: string;
    DrzavaKratkiNaziv?: string;
    PostanskiBroj?: string;
    OdredisniUred?: string;
    NP?: string;
    PunaAdresa?: string;
    NazivPrimateljaPunaAdresaRs?: string;
  }

  export const PosiljkaBrowseBaseInfo = createStructureInfo<Otprema2.PosiljkaBrowseBase>(
    'Otprema2/PosiljkaBrowseBase'
  );
  export interface PosiljkaBrowseBase {
    ID: string;
    FTSID?: number;
    Active?: boolean;
    BrojPosiljke?: string;
    Primatelj?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUsluge?: string;
    VrstaPosiljke?: string;
    IspisOmotnice?: string;
    IspisOmotniceID?: string;
    Kreirao?: string;
    Lokacija?: string;
    Kreirano?: Date;
    Zakljuceno?: Date;
    Napomena?: string;
    SadrzajCount?: number;
    DatumZadnjegIspisa?: Date;
    KreiraoReferenceID?: string;
    StatusPosiljkeID?: string;
  }

  export const PosiljkaBrowseInfo = createStructureInfo<Otprema2.PosiljkaBrowse>(
    'Otprema2/PosiljkaBrowse'
  );
  export interface PosiljkaBrowse {
    ID: string;
    Active?: boolean;
    BrojPosiljke?: string;
    Primatelj?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUsluge?: string;
    VrstaPosiljke?: string;
    IspisOmotnice?: string;
    IspisOmotniceID?: string;
    Kreirao?: string;
    Lokacija?: string;
    Kreirano?: Date;
    Zakljuceno?: Date;
    Napomena?: string;
    StatusPosiljkeID?: string;
    SadrzajCount?: number;
    Status?: string;
  }

  export const PosiljkaBrowseSearchInfo = createStructureInfo<Otprema2.PosiljkaBrowseSearch>(
    'Otprema2/PosiljkaBrowseSearch'
  );
  export interface PosiljkaBrowseSearch {
    StatusPosiljkeIDs?: string;
    StatusNaziv?: string;
  }

  export const PosiljkaLookupInfo = createStructureInfo<Otprema2.PosiljkaLookup>(
    'Otprema2/PosiljkaLookup'
  );
  export interface PosiljkaLookup {
    ID: string;
    Broj?: string;
  }

  export const PosiljkaDodatnaUslugaInfo = createStructureInfo<Otprema2.PosiljkaDodatnaUsluga>(
    'Otprema2/PosiljkaDodatnaUsluga'
  );
  export interface PosiljkaDodatnaUsluga {
    ID: string;
    PosiljkaID: string;
    DodatnaUslugaID: string;
  }

  export const SetPosiljkaDodatneUslugeInfo = createStructureInfo<
    Otprema2.SetPosiljkaDodatneUsluge
  >('Otprema2/SetPosiljkaDodatneUsluge');
  export interface SetPosiljkaDodatneUsluge {
    PosiljkaID?: string;
    DodatneUslugeIDsJson?: string;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
  }

  export const ComputePosiljkaFTSInfo = createStructureInfo<Otprema2.ComputePosiljkaFTS>(
    'Otprema2/ComputePosiljkaFTS'
  );
  export interface ComputePosiljkaFTS {
    ID: string;
    FtsContent?: string;
  }

  export const PosiljkaFTSInfo = createStructureInfo<Otprema2.PosiljkaFTS>('Otprema2/PosiljkaFTS');
  export interface PosiljkaFTS {
    ID: string;
    FtsContent?: string;
  }

  export const PosiljkaBrowseAdvancedSerachInfo = createStructureInfo<
    Otprema2.PosiljkaBrowseAdvancedSerach
  >('Otprema2/PosiljkaBrowseAdvancedSerach');
  export interface PosiljkaBrowseAdvancedSerach {
    Pattern?: string;
    Primatelj?: string;
    NP?: string;
    Adresa?: string;
    BrojPreporuke?: string;
    KlasifikacijskaOznaka?: string;
    UrBroj?: string;
    StatusPosiljkeIds?: string;
    BrojPosiljke?: string;
    KreiranoOd?: Date;
    KreiranoDo?: Date;
    ZakljucenoOd?: Date;
    ZakljucenoDo?: Date;
    IspisOmotniceIDs?: string;
    Ispisano?: boolean;
    PruzateljUslugeID?: string;
    VrstePosiljakaIDs?: string;
    DodatneUslugeIDs?: string;
    Kreirao?: string;
    LokacijaIDs?: string;
    ActiveOnly?: boolean;
    Page?: number;
    PageSize?: number;
  }

  export const ComputePosiljkaBrojacInfo = createStructureInfo<Otprema2.ComputePosiljkaBrojac>(
    'Otprema2/ComputePosiljkaBrojac'
  );
  export interface ComputePosiljkaBrojac {
    ID: string;
    BrojPosiljkiUGodini?: number;
    Godina?: number;
  }

  export const PosiljkaBrojacInfo = createStructureInfo<Otprema2.PosiljkaBrojac>(
    'Otprema2/PosiljkaBrojac'
  );
  export interface PosiljkaBrojac {
    ID: string;
    BrojPosiljkiUGodini?: number;
    Godina?: number;
  }

  export const ComputeDostavaObavljenaTPPInfo = createStructureInfo<
    Otprema2.ComputeDostavaObavljenaTPP
  >('Otprema2/ComputeDostavaObavljenaTPP');
  export interface ComputeDostavaObavljenaTPP {
    ID: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    DostavaObavljenaID?: string;
  }

  export const DostavaObavljenaTPP_MaterializedInfo = createStructureInfo<
    Otprema2.DostavaObavljenaTPP_Materialized
  >('Otprema2/DostavaObavljenaTPP_Materialized');
  export interface DostavaObavljenaTPP_Materialized {
    ID: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    DostavaObavljenaID?: string;
  }

  export const ComputePonistavanjeDostaveTPPInfo = createStructureInfo<
    Otprema2.ComputePonistavanjeDostaveTPP
  >('Otprema2/ComputePonistavanjeDostaveTPP');
  export interface ComputePonistavanjeDostaveTPP {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PonistavanjeDostaveID?: string;
  }

  export const PonistavanjeDostaveTPP_MaterializedInfo = createStructureInfo<
    Otprema2.PonistavanjeDostaveTPP_Materialized
  >('Otprema2/PonistavanjeDostaveTPP_Materialized');
  export interface PonistavanjeDostaveTPP_Materialized {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PonistavanjeDostaveID?: string;
  }

  export const ComputePosiljkaPonistenoZakljucivanjeTPPInfo = createStructureInfo<
    Otprema2.ComputePosiljkaPonistenoZakljucivanjeTPP
  >('Otprema2/ComputePosiljkaPonistenoZakljucivanjeTPP');
  export interface ComputePosiljkaPonistenoZakljucivanjeTPP {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
  }

  export const PosiljkaPonistenoZakljucivanjeTPP_MaterializedInfo = createStructureInfo<
    Otprema2.PosiljkaPonistenoZakljucivanjeTPP_Materialized
  >('Otprema2/PosiljkaPonistenoZakljucivanjeTPP_Materialized');
  export interface PosiljkaPonistenoZakljucivanjeTPP_Materialized {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
  }

  export const ComputePosiljkaZakljucivanjeTPPInfo = createStructureInfo<
    Otprema2.ComputePosiljkaZakljucivanjeTPP
  >('Otprema2/ComputePosiljkaZakljucivanjeTPP');
  export interface ComputePosiljkaZakljucivanjeTPP {
    ID: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    DatumOtpreme?: Date;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaZakljucenaID?: string;
  }

  export const PosiljkaZakljucivanjeTPP_MaterializedInfo = createStructureInfo<
    Otprema2.PosiljkaZakljucivanjeTPP_Materialized
  >('Otprema2/PosiljkaZakljucivanjeTPP_Materialized');
  export interface PosiljkaZakljucivanjeTPP_Materialized {
    ID: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    DatumOtpreme?: Date;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaZakljucenaID?: string;
  }

  export const AllowPosiljkaPermissionsInfo = createStructureInfo<
    Otprema2.AllowPosiljkaPermissions
  >('Otprema2/AllowPosiljkaPermissions');
  export interface AllowPosiljkaPermissions {
    ZaposlenikID?: string;
    PosiljkaID?: string;
    Subtype?: string;
    PosiljkaRadomUpravljaPravaPristupaID?: string;
    PosiljkaOvlasteniSluzbeniciUJID?: string;
    PredmetiPravoUvidaSluzbeniciUJID?: string;
    PosiljkaKreiraoPosiljkuID?: string;
    KorisniciSPravimaNadZapisimaNekogDjelatnikaKorisniciSPravimaNadZapisimaNekogDjelatnikaID?: string;
    KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaID?: string;
  }

  export const DenyPosiljkaPermissionsInfo = createStructureInfo<Otprema2.DenyPosiljkaPermissions>(
    'Otprema2/DenyPosiljkaPermissions'
  );
  export interface DenyPosiljkaPermissions {
    ZaposlenikID?: string;
    PosiljkaID?: string;
    Subtype?: string;
    DenyPosiljkaPermissionsPovjerljiviUrudzbeniPovjerljiviUrudzbeniID?: string;
  }

  export const PosiljkaPermissionsInfo = createStructureInfo<Otprema2.PosiljkaPermissions>(
    'Otprema2/PosiljkaPermissions'
  );
  export interface PosiljkaPermissions {
    ID: string;
    ZaposlenikID?: string;
    PosiljkaID?: string;
  }

  export const PosiljkaRadomUpravljaPravaPristupaInfo = createStructureInfo<
    Otprema2.PosiljkaRadomUpravljaPravaPristupa
  >('Otprema2/PosiljkaRadomUpravljaPravaPristupa');
  export interface PosiljkaRadomUpravljaPravaPristupa {
    ID: string;
  }

  export const PosiljkaOvlasteniSluzbeniciUJInfo = createStructureInfo<
    Otprema2.PosiljkaOvlasteniSluzbeniciUJ
  >('Otprema2/PosiljkaOvlasteniSluzbeniciUJ');
  export interface PosiljkaOvlasteniSluzbeniciUJ {
    ID: string;
  }

  export const PredmetiPravoUvidaSluzbeniciUJInfo = createStructureInfo<
    Otprema2.PredmetiPravoUvidaSluzbeniciUJ
  >('Otprema2/PredmetiPravoUvidaSluzbeniciUJ');
  export interface PredmetiPravoUvidaSluzbeniciUJ {
    ID: string;
  }

  export const KorisniciSPravimaNadZapisimaNekogDjelatnikaInfo = createStructureInfo<
    Otprema2.KorisniciSPravimaNadZapisimaNekogDjelatnika
  >('Otprema2/KorisniciSPravimaNadZapisimaNekogDjelatnika');
  export interface KorisniciSPravimaNadZapisimaNekogDjelatnika {
    ID: string;
  }

  export const KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaInfo = createStructureInfo<
    Otprema2.KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika
  >('Otprema2/KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika');
  export interface KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika {
    ID: string;
  }

  export const PrimateljInfo = createStructureInfo<Otprema2.Primatelj>('Otprema2/Primatelj');
  export interface Primatelj {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljLookupInfo = createStructureInfo<Otprema2.PrimateljLookup>(
    'Otprema2/PrimateljLookup'
  );
  export interface PrimateljLookup {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljLookupSearchInfo = createStructureInfo<Otprema2.PrimateljLookupSearch>(
    'Otprema2/PrimateljLookupSearch'
  );
  export interface PrimateljLookupSearch {
    Pattern?: string;
    PageSize: number;
  }

  export const PrimateljWithGrupaPrimateljaInfo = createStructureInfo<
    Otprema2.PrimateljWithGrupaPrimatelja
  >('Otprema2/PrimateljWithGrupaPrimatelja');
  export interface PrimateljWithGrupaPrimatelja {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljWithGrupaPrimateljaLookupInfo = createStructureInfo<
    Otprema2.PrimateljWithGrupaPrimateljaLookup
  >('Otprema2/PrimateljWithGrupaPrimateljaLookup');
  export interface PrimateljWithGrupaPrimateljaLookup {
    ID: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljWithGrupaPrimateljaLookupSearchInfo = createStructureInfo<
    Otprema2.PrimateljWithGrupaPrimateljaLookupSearch
  >('Otprema2/PrimateljWithGrupaPrimateljaLookupSearch');
  export interface PrimateljWithGrupaPrimateljaLookupSearch {
    Pattern?: string;
    TipPrimateljaID?: string;
    PageSize: number;
  }

  export const PrimateljWithGrupaPrimateljaLookupSearchGenericSearchInfo = createStructureInfo<
    Otprema2.PrimateljWithGrupaPrimateljaLookupSearchGenericSearch
  >('Otprema2/PrimateljWithGrupaPrimateljaLookupSearchGenericSearch');
  export interface PrimateljWithGrupaPrimateljaLookupSearchGenericSearch {
    Pattern?: string;
    FilterSubjekt?: boolean;
    FilterZaposlenik?: boolean;
    FilterUstrojstvenaJedinica?: boolean;
    FilterGrupaPrimatelja?: boolean;
    FilterAktivan?: boolean;
    PageSize: number;
  }

  export const TipPrimateljaInfo = createStructureInfo<Otprema2.TipPrimatelja>(
    'Otprema2/TipPrimatelja'
  );
  export interface TipPrimatelja {
    ID: string;
    Naziv?: string;
    FilterSubjekt?: boolean;
    FilterZaposlenik?: boolean;
    FilterUstrojstvenaJedinica?: boolean;
    FilterGrupaPrimatelja?: boolean;
  }

  export const PosiljkaObrisanaInfo = createStructureInfo<Otprema2.PosiljkaObrisana>(
    'Otprema2/PosiljkaObrisana'
  );
  export interface PosiljkaObrisana {
    ID: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    PosiljkaID: string;
    RazlogBrisanja?: string;
  }

  export const BrisanjePosiljkaInfo = createStructureInfo<Otprema2.BrisanjePosiljka>(
    'Otprema2/BrisanjePosiljka'
  );
  export interface BrisanjePosiljka {
    IsActive: boolean;
    ActiveReason?: string;
    PosiljkaID: string;
  }

  export const ValidForPosiljkaBrisanjeInfo = createStructureInfo<
    Otprema2.ValidForPosiljkaBrisanje
  >('Otprema2/ValidForPosiljkaBrisanje');
  export interface ValidForPosiljkaBrisanje {}

  export const DostavaObavljenaInfo = createStructureInfo<Otprema2.DostavaObavljena>(
    'Otprema2/DostavaObavljena'
  );
  export interface DostavaObavljena {
    ID: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID: string;
  }

  export const ValidForDostavaObavljenaInfo = createStructureInfo<
    Otprema2.ValidForDostavaObavljena
  >('Otprema2/ValidForDostavaObavljena');
  export interface ValidForDostavaObavljena {}

  export const SadrzajPosiljkePismenoValidForDostavaObavljenaInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkePismenoValidForDostavaObavljena
  >('Otprema2/SadrzajPosiljkePismenoValidForDostavaObavljena');
  export interface SadrzajPosiljkePismenoValidForDostavaObavljena {}

  export const PosiljkaDostavaObavljenaNotValidForDostavaObavljenaInfo = createStructureInfo<
    Otprema2.PosiljkaDostavaObavljenaNotValidForDostavaObavljena
  >('Otprema2/PosiljkaDostavaObavljenaNotValidForDostavaObavljena');
  export interface PosiljkaDostavaObavljenaNotValidForDostavaObavljena {
    ID: string;
    StatusPismenaNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoKlasifikacijskaOznaka?: string;
  }

  export const PosiljkaIspisOmotniceInfo = createStructureInfo<Otprema2.PosiljkaIspisOmotnice>(
    'Otprema2/PosiljkaIspisOmotnice'
  );
  export interface PosiljkaIspisOmotnice {
    ID: string;
    DatumIspisa?: Date;
    IspisaoID?: string;
    PosiljkaID: string;
  }

  export const ValidForIspisOmotniceInfo = createStructureInfo<Otprema2.ValidForIspisOmotnice>(
    'Otprema2/ValidForIspisOmotnice'
  );
  export interface ValidForIspisOmotnice {}

  export const InsertPosiljkaIspisOmotniceInfo = createStructureInfo<
    Otprema2.InsertPosiljkaIspisOmotnice
  >('Otprema2/InsertPosiljkaIspisOmotnice');
  export interface InsertPosiljkaIspisOmotnice {
    PosiljkaIDs?: string;
  }

  export const PosiljkaPonistenoBrisanjeInfo = createStructureInfo<
    Otprema2.PosiljkaPonistenoBrisanje
  >('Otprema2/PosiljkaPonistenoBrisanje');
  export interface PosiljkaPonistenoBrisanje {
    ID: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    PosiljkaID: string;
  }

  export const ValidForPosiljkaPonistavanjeBrisanjaInfo = createStructureInfo<
    Otprema2.ValidForPosiljkaPonistavanjeBrisanja
  >('Otprema2/ValidForPosiljkaPonistavanjeBrisanja');
  export interface ValidForPosiljkaPonistavanjeBrisanja {}

  export const SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanjeInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanje
  >('Otprema2/SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanje');
  export interface SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanje {}

  export const PonistavanjeDostaveInfo = createStructureInfo<Otprema2.PonistavanjeDostave>(
    'Otprema2/PonistavanjeDostave'
  );
  export interface PonistavanjeDostave {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID: string;
  }

  export const ValidForPonistavanjeDostaveInfo = createStructureInfo<
    Otprema2.ValidForPonistavanjeDostave
  >('Otprema2/ValidForPonistavanjeDostave');
  export interface ValidForPonistavanjeDostave {}

  export const PosiljkaPonistenoZakljucivanjeInfo = createStructureInfo<
    Otprema2.PosiljkaPonistenoZakljucivanje
  >('Otprema2/PosiljkaPonistenoZakljucivanje');
  export interface PosiljkaPonistenoZakljucivanje {
    ID: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID: string;
  }

  export const ValidForPosiljkaPonistenoZakljucivanjeInfo = createStructureInfo<
    Otprema2.ValidForPosiljkaPonistenoZakljucivanje
  >('Otprema2/ValidForPosiljkaPonistenoZakljucivanje');
  export interface ValidForPosiljkaPonistenoZakljucivanje {}

  export const PosiljkaZakljucenaInfo = createStructureInfo<Otprema2.PosiljkaZakljucena>(
    'Otprema2/PosiljkaZakljucena'
  );
  export interface PosiljkaZakljucena {
    ID: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    PosiljkaID: string;
    DatumOtpreme: Date;
  }

  export const ValidForPosiljkaZakljucivanjeInfo = createStructureInfo<
    Otprema2.ValidForPosiljkaZakljucivanje
  >('Otprema2/ValidForPosiljkaZakljucivanje');
  export interface ValidForPosiljkaZakljucivanje {}

  export const SadrzajPosiljkeNeaktivanPosiljkaZakljucavanjeInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkeNeaktivanPosiljkaZakljucavanje
  >('Otprema2/SadrzajPosiljkeNeaktivanPosiljkaZakljucavanje');
  export interface SadrzajPosiljkeNeaktivanPosiljkaZakljucavanje {}

  export const SadrzajPosiljkePismenoValidForOtpremanjeInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkePismenoValidForOtpremanje
  >('Otprema2/SadrzajPosiljkePismenoValidForOtpremanje');
  export interface SadrzajPosiljkePismenoValidForOtpremanje {}

  export const PosiljkaZakljucenaNotValidForOtpremanjeInfo = createStructureInfo<
    Otprema2.PosiljkaZakljucenaNotValidForOtpremanje
  >('Otprema2/PosiljkaZakljucenaNotValidForOtpremanje');
  export interface PosiljkaZakljucenaNotValidForOtpremanje {
    ID: string;
    StatusPismenaNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoKlasifikacijskaOznaka?: string;
  }

  export const SadrzajPosiljkeInfo = createStructureInfo<Otprema2.SadrzajPosiljke>(
    'Otprema2/SadrzajPosiljke'
  );
  export interface SadrzajPosiljke {
    ID: string;
    PosiljkaID: string;
    SadrzajID: string;
  }

  export const SadrzajPosiljkeNeaktivanInfo = createStructureInfo<
    Otprema2.SadrzajPosiljkeNeaktivan
  >('Otprema2/SadrzajPosiljkeNeaktivan');
  export interface SadrzajPosiljkeNeaktivan {}

  export const SadrzajPosiljkeBrowseInfo = createStructureInfo<Otprema2.SadrzajPosiljkeBrowse>(
    'Otprema2/SadrzajPosiljkeBrowse'
  );
  export interface SadrzajPosiljkeBrowse {
    ID: string;
    PosiljkaID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    Tip?: string;
    EntityID?: string;
  }

  export const PismenoPrilogBrowseInfo = createStructureInfo<Otprema2.PismenoPrilogBrowse>(
    'Otprema2/PismenoPrilogBrowse'
  );
  export interface PismenoPrilogBrowse {
    ID: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    Tip?: string;
  }

  export const PismenoPrilogBrowseThisIDsOnlyInfo = createStructureInfo<
    Otprema2.PismenoPrilogBrowseThisIDsOnly
  >('Otprema2/PismenoPrilogBrowseThisIDsOnly');
  export interface PismenoPrilogBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const StanjePosiljkePrijeDogadjajaInfo = createStructureInfo<
    Otprema2.StanjePosiljkePrijeDogadjaja
  >('Otprema2/StanjePosiljkePrijeDogadjaja');
  export interface StanjePosiljkePrijeDogadjaja {
    ID: string;
    PrethodniStatusPosiljkeID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const StatusPosiljkeInfo = createStructureInfo<Otprema2.StatusPosiljke>(
    'Otprema2/StatusPosiljke'
  );
  export interface StatusPosiljke {
    ID: string;
    Naziv: string;
    ValidForKreiranje?: boolean;
    ValidForUredjivanje?: boolean;
    ValidForBrisanje?: boolean;
    ValidForPonistavanjeBrisanja?: boolean;
    ValidForZakljucivanje?: boolean;
    ValidForPonistavanjeZakljucivanja?: boolean;
    ValidForDostavaObavljena?: boolean;
    ValidForPonistavanjeDostave?: boolean;
    ValidForIspisOmotnice?: boolean;
  }

  export const TijekPostupanjaPosiljkaInfo = createStructureInfo<Otprema2.TijekPostupanjaPosiljka>(
    'Otprema2/TijekPostupanjaPosiljka'
  );
  export interface TijekPostupanjaPosiljka {
    DatumVrijeme?: Date;
    KorisnikID?: string;
    PosiljkaID?: string;
    StatusPosiljkeID?: string;
    Opis?: string;
    Subtype?: string;
    PosiljkaObrisanaID?: string;
    DostavaObavljenaID?: string;
    PosiljkaIspisOmotniceID?: string;
    PosiljkaPonistenoBrisanjeID?: string;
    PonistavanjeDostaveID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
    PosiljkaZakljucenaID?: string;
    PosiljkaKreiranjePosiljkeID?: string;
  }

  export const TijekPostupanjaPosiljka_MaterializedInfo = createStructureInfo<
    Otprema2.TijekPostupanjaPosiljka_Materialized
  >('Otprema2/TijekPostupanjaPosiljka_Materialized');
  export interface TijekPostupanjaPosiljka_Materialized {
    ID: string;
    DatumVrijeme?: Date;
    PosiljkaID?: string;
    StatusPosiljkeID?: string;
  }

  export const TijekPostupanjaPosiljkaStatusInfo = createStructureInfo<
    Otprema2.TijekPostupanjaPosiljkaStatus
  >('Otprema2/TijekPostupanjaPosiljkaStatus');
  export interface TijekPostupanjaPosiljkaStatus {
    ID: string;
    StatusPosiljkeID?: string;
  }

  export const TrenutnoStanjePosiljkeInfo = createStructureInfo<Otprema2.TrenutnoStanjePosiljke>(
    'Otprema2/TrenutnoStanjePosiljke'
  );
  export interface TrenutnoStanjePosiljke {
    ID: string;
    SadrzajCount?: number;
    ZadnjiTppID?: string;
    StatusPosiljkeID?: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
    Active?: boolean;
  }

  export const TrenutnoStanjePosiljkeComputedInfo = createStructureInfo<
    Otprema2.TrenutnoStanjePosiljkeComputed
  >('Otprema2/TrenutnoStanjePosiljkeComputed');
  export interface TrenutnoStanjePosiljkeComputed {
    ID: string;
    StatusPosiljkeID?: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
    SadrzajCount?: number;
    Active?: boolean;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const TrenutnoStanjePosiljke_MaterializedInfo = createStructureInfo<
    Otprema2.TrenutnoStanjePosiljke_Materialized
  >('Otprema2/TrenutnoStanjePosiljke_Materialized');
  export interface TrenutnoStanjePosiljke_Materialized {
    ID: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
    SadrzajCount?: number;
    NivoStupnjaTajnosti?: number;
    Active?: boolean;
    StatusPosiljkeID?: string;
    StupanjTajnostiID?: string;
  }

  export const UpdatePosiljkaInfo = createStructureInfo<Otprema2.UpdatePosiljka>(
    'Otprema2/UpdatePosiljka'
  );
  export interface UpdatePosiljka {
    PosiljkaID: string;
    PrimateljID?: string;
    Broj?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    NaseljeID?: string;
  }

  export const UputaZaOtpremuInfo = createStructureInfo<Otprema2.UputaZaOtpremu>(
    'Otprema2/UputaZaOtpremu'
  );
  export interface UputaZaOtpremu {
    ID: string;
    PrimateljID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    PogresnoDostavljena?: boolean;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const GetZadnjeKreiraneUputaZaOtpremuComputedInfo = createStructureInfo<
    Otprema2.GetZadnjeKreiraneUputaZaOtpremuComputed
  >('Otprema2/GetZadnjeKreiraneUputaZaOtpremuComputed');
  export interface GetZadnjeKreiraneUputaZaOtpremuComputed {
    ID: string;
  }

  export const GetInfo = createStructureInfo<Otprema2.Get>('Otprema2/Get');
  export interface Get {
    PismenoIDs?: string;
  }

  export const UputaZaOtpremuAdresaSubjektInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuAdresaSubjekt
  >('Otprema2/UputaZaOtpremuAdresaSubjekt');
  export interface UputaZaOtpremuAdresaSubjekt {
    ID: string;
    NP?: string;
    UlicaIKucniBroj?: string;
    NaseljeID?: string;
  }

  export const UputaZaOtpremuAdresaLokacijaInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuAdresaLokacija
  >('Otprema2/UputaZaOtpremuAdresaLokacija');
  export interface UputaZaOtpremuAdresaLokacija {
    ID: string;
    NP?: string;
    LokacijaID?: string;
  }

  export const ValidForUputaEditInfo = createStructureInfo<Otprema2.ValidForUputaEdit>(
    'Otprema2/ValidForUputaEdit'
  );
  export interface ValidForUputaEdit {}

  export const SetUputaZaOtpremuAdresaSubjektInfo = createStructureInfo<
    Otprema2.SetUputaZaOtpremuAdresaSubjekt
  >('Otprema2/SetUputaZaOtpremuAdresaSubjekt');
  export interface SetUputaZaOtpremuAdresaSubjekt {
    UputaZaOtpremuID?: string;
    UputaZaOtpremuAdresaSubjektJson?: string;
    SetAsDetaultSubjektAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
  }

  export const SetUputaZaOtpremuAdresaInfo = createStructureInfo<Otprema2.SetUputaZaOtpremuAdresa>(
    'Otprema2/SetUputaZaOtpremuAdresa'
  );
  export interface SetUputaZaOtpremuAdresa {
    UputaZaOtpremuID?: string;
    UputaZaOtpremuAdresaSubjektJson?: string;
    UputaZaOtpremuAdresaSubjektSetAsDefaultAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
    UputaZaOtpremuAdresaLokacijaJson?: string;
  }

  export const UputaZaOtpremuBrisanjeEventInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuBrisanjeEvent
  >('Otprema2/UputaZaOtpremuBrisanjeEvent');
  export interface UputaZaOtpremuBrisanjeEvent {
    ID: string;
    UputaZaOtpremuID: string;
    Napomena?: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaBrisanjeInfo = createStructureInfo<Otprema2.ValidForUputaBrisanje>(
    'Otprema2/ValidForUputaBrisanje'
  );
  export interface ValidForUputaBrisanje {}

  export const UputaZaOtpremuBrowseBaseInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuBrowseBase
  >('Otprema2/UputaZaOtpremuBrowseBase');
  export interface UputaZaOtpremuBrowseBase {
    ID: string;
    PrimateljNaziv?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUslugeNaziv?: string;
    VrstaPosiljkeNaziv?: string;
    IspisOmotniceNaziv?: string;
    KreiraoNaziv?: string;
    LokacijaNaziv?: string;
    DatumKreiranja?: Date;
    Napomena?: string;
    StatusNaziv?: string;
    BrojPosiljke?: string;
    StatusID?: string;
    LokacijaID?: string;
  }

  export const UputaZaOtpremuBrowseInfo = createStructureInfo<Otprema2.UputaZaOtpremuBrowse>(
    'Otprema2/UputaZaOtpremuBrowse'
  );
  export interface UputaZaOtpremuBrowse {
    ID: string;
    PrimateljNaziv?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUslugeNaziv?: string;
    VrstaPosiljkeNaziv?: string;
    IspisOmotniceNaziv?: string;
    KreiraoNaziv?: string;
    LokacijaNaziv?: string;
    DatumKreiranja?: Date;
    Napomena?: string;
    StatusNaziv?: string;
    StatusID?: string;
    BrojPosiljke?: string;
  }

  export const UputaZaOtpremuBrowseAdvancedSearchInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuBrowseAdvancedSearch
  >('Otprema2/UputaZaOtpremuBrowseAdvancedSearch');
  export interface UputaZaOtpremuBrowseAdvancedSearch {
    Pattern?: string;
    PrimateljNaziv?: string;
    NP?: string;
    Adresa?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    StatusUputeIDs?: string;
    BrojPreporuke?: string;
    DatumKreiranjaOd?: Date;
    DatumKreiranjaDo?: Date;
    IspisOmotniceIDs?: string;
    JeIspisano?: boolean;
    PruzateljUslugeID?: string;
    VrstaPosiljkeIDs?: string;
    DodatneUslugeIDs?: string;
    KreiraoNaziv?: string;
    LokacijaIDs?: string;
    BrojPosiljke?: string;
  }

  export const UputaZaOtpremuDodatnaUslugaInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuDodatnaUsluga
  >('Otprema2/UputaZaOtpremuDodatnaUsluga');
  export interface UputaZaOtpremuDodatnaUsluga {
    ID: string;
    UputaZaOtpremuID: string;
    DodatnaUslugaID: string;
  }

  export const SetUputaZaOtpremuDodatnaUslugaInfo = createStructureInfo<
    Otprema2.SetUputaZaOtpremuDodatnaUsluga
  >('Otprema2/SetUputaZaOtpremuDodatnaUsluga');
  export interface SetUputaZaOtpremuDodatnaUsluga {
    UputaZaOtpremuID?: string;
    DodatneUslugeIDsJson?: string;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
  }

  export const UputaZaOtpremuEventDataInfo = createStructureInfo<Otprema2.UputaZaOtpremuEventData>(
    'Otprema2/UputaZaOtpremuEventData'
  );
  export interface UputaZaOtpremuEventData {
    ID: string;
    ZadnjiEventID?: string;
    StatusID?: string;
  }

  export const UputaZaOtpremuEventLogInfo = createStructureInfo<Otprema2.UputaZaOtpremuEventLog>(
    'Otprema2/UputaZaOtpremuEventLog'
  );
  export interface UputaZaOtpremuEventLog {
    KorisnikID: string;
    DatumVrijeme?: Date;
    UputaZaOtpremuID?: string;
    StatusID?: string;
    Subtype?: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    UputaZaOtpremuIspisOmotniceID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuUpisEventID?: string;
    UputaZaOtpremuKreiranjeID?: string;
  }

  export const UputaZaOtpremuEventLog_MaterializedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuEventLog_Materialized
  >('Otprema2/UputaZaOtpremuEventLog_Materialized');
  export interface UputaZaOtpremuEventLog_Materialized {
    ID: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    UputaZaOtpremuID?: string;
    StatusID?: string;
  }

  export const UputaZaOtpremuDefaultPrimateljInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuDefaultPrimatelj
  >('Otprema2/UputaZaOtpremuDefaultPrimatelj');
  export interface UputaZaOtpremuDefaultPrimatelj {
    ID: string;
    PrimateljID?: string;
  }

  export const UputaZaOtpremuIspisOmotniceInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuIspisOmotnice
  >('Otprema2/UputaZaOtpremuIspisOmotnice');
  export interface UputaZaOtpremuIspisOmotnice {
    ID: string;
    UputaZaOtpremuID: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ComputeUputaZaOtpremuBrisanjeTPPInfo = createStructureInfo<
    Otprema2.ComputeUputaZaOtpremuBrisanjeTPP
  >('Otprema2/ComputeUputaZaOtpremuBrisanjeTPP');
  export interface ComputeUputaZaOtpremuBrisanjeTPP {
    ID: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuBrisanjeTPP_MaterializedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuBrisanjeTPP_Materialized
  >('Otprema2/UputaZaOtpremuBrisanjeTPP_Materialized');
  export interface UputaZaOtpremuBrisanjeTPP_Materialized {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuSadrzajInsertTPP_MaterializedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuSadrzajInsertTPP_Materialized
  >('Otprema2/UputaZaOtpremuSadrzajInsertTPP_Materialized');
  export interface UputaZaOtpremuSadrzajInsertTPP_Materialized {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
  }

  export const ComputeUputaZaOtpremuSadrzajInsertTPPInfo = createStructureInfo<
    Otprema2.ComputeUputaZaOtpremuSadrzajInsertTPP
  >('Otprema2/ComputeUputaZaOtpremuSadrzajInsertTPP');
  export interface ComputeUputaZaOtpremuSadrzajInsertTPP {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
  }

  export const ComputeUputaZaOtpremuPonistavanjeBrisanjaTPPInfo = createStructureInfo<
    Otprema2.ComputeUputaZaOtpremuPonistavanjeBrisanjaTPP
  >('Otprema2/ComputeUputaZaOtpremuPonistavanjeBrisanjaTPP');
  export interface ComputeUputaZaOtpremuPonistavanjeBrisanjaTPP {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuPonistiBrisanjeTPP_MaterializedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuPonistiBrisanjeTPP_Materialized
  >('Otprema2/UputaZaOtpremuPonistiBrisanjeTPP_Materialized');
  export interface UputaZaOtpremuPonistiBrisanjeTPP_Materialized {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuSadrzajUpisTPP_MaterializedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuSadrzajUpisTPP_Materialized
  >('Otprema2/UputaZaOtpremuSadrzajUpisTPP_Materialized');
  export interface UputaZaOtpremuSadrzajUpisTPP_Materialized {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    PismenoID?: string;
    UputaZaOtpremuUpisEventID?: string;
  }

  export const ComputeUputaZaOtpremuSadrzajUpisTPPInfo = createStructureInfo<
    Otprema2.ComputeUputaZaOtpremuSadrzajUpisTPP
  >('Otprema2/ComputeUputaZaOtpremuSadrzajUpisTPP');
  export interface ComputeUputaZaOtpremuSadrzajUpisTPP {
    ID: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    PismenoID?: string;
    UputaZaOtpremuUpisEventID?: string;
  }

  export const UputaZaOtpremuPonistiBrisanjeEventInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuPonistiBrisanjeEvent
  >('Otprema2/UputaZaOtpremuPonistiBrisanjeEvent');
  export interface UputaZaOtpremuPonistiBrisanjeEvent {
    ID: string;
    UputaZaOtpremuID: string;
    Napomena?: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaPonistiBrisanjeInfo = createStructureInfo<
    Otprema2.ValidForUputaPonistiBrisanje
  >('Otprema2/ValidForUputaPonistiBrisanje');
  export interface ValidForUputaPonistiBrisanje {}

  export const UputaZaOtpremuSadrzajInfo = createStructureInfo<Otprema2.UputaZaOtpremuSadrzaj>(
    'Otprema2/UputaZaOtpremuSadrzaj'
  );
  export interface UputaZaOtpremuSadrzaj {
    ID: string;
    UputaZaOtpremuID: string;
    SadrzajID: string;
    DatumUnosa?: Date;
  }

  export const UputaZaOtpremuSadrzajNeaktivanInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuSadrzajNeaktivan
  >('Otprema2/UputaZaOtpremuSadrzajNeaktivan');
  export interface UputaZaOtpremuSadrzajNeaktivan {}

  export const PredmetStatusValidForKreirajUputuOtpremeInfo = createStructureInfo<
    Otprema2.PredmetStatusValidForKreirajUputuOtpreme
  >('Otprema2/PredmetStatusValidForKreirajUputuOtpreme');
  export interface PredmetStatusValidForKreirajUputuOtpreme {}

  export const PismenoStatusValidForKreirajUputuOtpremeInfo = createStructureInfo<
    Otprema2.PismenoStatusValidForKreirajUputuOtpreme
  >('Otprema2/PismenoStatusValidForKreirajUputuOtpreme');
  export interface PismenoStatusValidForKreirajUputuOtpreme {}

  export const SetUputaZaOtpremuSadrzajInfo = createStructureInfo<
    Otprema2.SetUputaZaOtpremuSadrzaj
  >('Otprema2/SetUputaZaOtpremuSadrzaj');
  export interface SetUputaZaOtpremuSadrzaj {
    UputaZaOtpremuID?: string;
    SadrzajIDsJson?: string;
  }

  export const UputaZaOtpremuStanjePrijeEventaInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuStanjePrijeEventa
  >('Otprema2/UputaZaOtpremuStanjePrijeEventa');
  export interface UputaZaOtpremuStanjePrijeEventa {
    ID: string;
    PrethodniEventID?: string;
    PrethodniEventSaStatusomID?: string;
    PrethodniStatusID?: string;
  }

  export const UputaZaOtpremuStatusInfo = createStructureInfo<Otprema2.UputaZaOtpremuStatus>(
    'Otprema2/UputaZaOtpremuStatus'
  );
  export interface UputaZaOtpremuStatus {
    ID: string;
    Naziv: string;
    ValidForBrisanje?: boolean;
    ValidForPonistiBrisanje?: boolean;
    ValidForUputaUpisivanje?: boolean;
    ValidForUputaEdit?: boolean;
    ValidForIspisOmotnice?: boolean;
    Active?: boolean;
  }

  export const UputaZaOtpremuUpisEventInfo = createStructureInfo<Otprema2.UputaZaOtpremuUpisEvent>(
    'Otprema2/UputaZaOtpremuUpisEvent'
  );
  export interface UputaZaOtpremuUpisEvent {
    ID: string;
    UputaZaOtpremuID: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaUpisivanjeInfo = createStructureInfo<Otprema2.ValidForUputaUpisivanje>(
    'Otprema2/ValidForUputaUpisivanje'
  );
  export interface ValidForUputaUpisivanje {}

  export const UputaZaOtpremuUpisEventPosiljkaInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuUpisEventPosiljka
  >('Otprema2/UputaZaOtpremuUpisEventPosiljka');
  export interface UputaZaOtpremuUpisEventPosiljka {
    ID: string;
    UputaZaOtpremuUpisEventID: string;
    PosiljkaID: string;
  }

  export const UputaZaOtpremuUpisEventInsertInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuUpisEventInsert
  >('Otprema2/UputaZaOtpremuUpisEventInsert');
  export interface UputaZaOtpremuUpisEventInsert {
    UputaZaOtpremuID: string;
    PosiljkeIDsJson: string;
  }

  export const UputaZaOtpremuUpsertInfo = createStructureInfo<Otprema2.UputaZaOtpremuUpsert>(
    'Otprema2/UputaZaOtpremuUpsert'
  );
  export interface UputaZaOtpremuUpsert {
    UputaZaOtpremuID?: string;
    PrimateljID?: string;
    Broj?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    PogresnoDostavljena?: boolean;
    SadrzajIDsJsonList?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
    NaseljeID?: string;
  }

  export const UputaZaOtpremuFtsComputedInfo = createStructureInfo<
    Otprema2.UputaZaOtpremuFtsComputed
  >('Otprema2/UputaZaOtpremuFtsComputed');
  export interface UputaZaOtpremuFtsComputed {
    ID: string;
    FtsContent?: string;
  }

  export const UputaZaOtpremuFtsInfo = createStructureInfo<Otprema2.UputaZaOtpremuFts>(
    'Otprema2/UputaZaOtpremuFts'
  );
  export interface UputaZaOtpremuFts {
    ID: string;
    FtsContent?: string;
  }

  export const RS_Koverte_VrstaIspisaInfo = createStructureInfo<Otprema2.RS_Koverte_VrstaIspisa>(
    'Otprema2/RS_Koverte_VrstaIspisa'
  );
  export interface RS_Koverte_VrstaIspisa {
    ID: string;
    Vrsta?: string;
  }

  export const RS_Lookup_FullUserNameInfo = createStructureInfo<Otprema2.RS_Lookup_FullUserName>(
    'Otprema2/RS_Lookup_FullUserName'
  );
  export interface RS_Lookup_FullUserName {
    ID: string;
    UserName?: string;
    FullUserName?: string;
  }

  export const RS_Lookup_LokacijaInfo = createStructureInfo<Otprema2.RS_Lookup_Lokacija>(
    'Otprema2/RS_Lookup_Lokacija'
  );
  export interface RS_Lookup_Lokacija {
    ID: string;
    RowNum?: number;
    Value?: string;
    Label?: string;
  }

  export const RS_Lookup_VrstaPosiljkeInfo = createStructureInfo<Otprema2.RS_Lookup_VrstaPosiljke>(
    'Otprema2/RS_Lookup_VrstaPosiljke'
  );
  export interface RS_Lookup_VrstaPosiljke {
    ID: string;
    RowNum?: number;
    Value?: string;
    Label?: string;
  }

  export const DenyPosiljkaPermissionsPovjerljiviUrudzbeniInfo = createStructureInfo<
    Otprema2.DenyPosiljkaPermissionsPovjerljiviUrudzbeni
  >('Otprema2/DenyPosiljkaPermissionsPovjerljiviUrudzbeni');
  export interface DenyPosiljkaPermissionsPovjerljiviUrudzbeni {
    ID: string;
  }

  export const StupanjTajnostiUputeZaOtpremuInfo = createStructureInfo<
    Otprema2.StupanjTajnostiUputeZaOtpremu
  >('Otprema2/StupanjTajnostiUputeZaOtpremu');
  export interface StupanjTajnostiUputeZaOtpremu {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const GrupaPrimateljaLookupInfo = createStructureInfo<Otprema2.GrupaPrimateljaLookup>(
    'Otprema2/GrupaPrimateljaLookup'
  );
  export interface GrupaPrimateljaLookup {
    ID: string;
    Naziv?: string;
  }

  export const PruzateljUslugeLookupInfo = createStructureInfo<Otprema2.PruzateljUslugeLookup>(
    'Otprema2/PruzateljUslugeLookup'
  );
  export interface PruzateljUslugeLookup {
    ID: string;
    Naziv?: string;
  }

  export const IspisOmotniceLookupInfo = createStructureInfo<Otprema2.IspisOmotniceLookup>(
    'Otprema2/IspisOmotniceLookup'
  );
  export interface IspisOmotniceLookup {
    ID: string;
    Naziv?: string;
  }

  export const StatusPosiljkeLookupInfo = createStructureInfo<Otprema2.StatusPosiljkeLookup>(
    'Otprema2/StatusPosiljkeLookup'
  );
  export interface StatusPosiljkeLookup {
    ID: string;
    Naziv?: string;
  }

  export const Masa_MinValueFilterInfo = createStructureInfo<Otprema2.Masa_MinValueFilter>(
    'Otprema2/Masa_MinValueFilter'
  );
  export interface Masa_MinValueFilter {}

  export const BrojOmotnica_MinValueFilterInfo = createStructureInfo<
    Otprema2.BrojOmotnica_MinValueFilter
  >('Otprema2/BrojOmotnica_MinValueFilter');
  export interface BrojOmotnica_MinValueFilter {}

  export const Cijena_MinValueFilterInfo = createStructureInfo<Otprema2.Cijena_MinValueFilter>(
    'Otprema2/Cijena_MinValueFilter'
  );
  export interface Cijena_MinValueFilter {}

  export const Vrijednost_MinValueFilterInfo = createStructureInfo<
    Otprema2.Vrijednost_MinValueFilter
  >('Otprema2/Vrijednost_MinValueFilter');
  export interface Vrijednost_MinValueFilter {}

  export const NegativnaCijenaUnutarnjiPrometInfo = createStructureInfo<
    Otprema2.NegativnaCijenaUnutarnjiPromet
  >('Otprema2/NegativnaCijenaUnutarnjiPromet');
  export interface NegativnaCijenaUnutarnjiPromet {}

  export const NegativnaCijenaMedjunarodniPrometInfo = createStructureInfo<
    Otprema2.NegativnaCijenaMedjunarodniPromet
  >('Otprema2/NegativnaCijenaMedjunarodniPromet');
  export interface NegativnaCijenaMedjunarodniPromet {}

  export const NegativnaCijenaUnutarnjiPrometPostotakInfo = createStructureInfo<
    Otprema2.NegativnaCijenaUnutarnjiPrometPostotak
  >('Otprema2/NegativnaCijenaUnutarnjiPrometPostotak');
  export interface NegativnaCijenaUnutarnjiPrometPostotak {}

  export const CijenaIPostotakValidInfo = createStructureInfo<Otprema2.CijenaIPostotakValid>(
    'Otprema2/CijenaIPostotakValid'
  );
  export interface CijenaIPostotakValid {}

  export const NegativnaVrijednostDoInfo = createStructureInfo<Otprema2.NegativnaVrijednostDo>(
    'Otprema2/NegativnaVrijednostDo'
  );
  export interface NegativnaVrijednostDo {}

  export const NegativnaVrijednostOdInfo = createStructureInfo<Otprema2.NegativnaVrijednostOd>(
    'Otprema2/NegativnaVrijednostOd'
  );
  export interface NegativnaVrijednostOd {}

  export const VrijednostOdVecaOdVrijednostDoInfo = createStructureInfo<
    Otprema2.VrijednostOdVecaOdVrijednostDo
  >('Otprema2/VrijednostOdVecaOdVrijednostDo');
  export interface VrijednostOdVecaOdVrijednostDo {}

  export const NegativnaMasaDoInfo = createStructureInfo<Otprema2.NegativnaMasaDo>(
    'Otprema2/NegativnaMasaDo'
  );
  export interface NegativnaMasaDo {}

  export const NegativnaMasaOdInfo = createStructureInfo<Otprema2.NegativnaMasaOd>(
    'Otprema2/NegativnaMasaOd'
  );
  export interface NegativnaMasaOd {}

  export const MasaOdVecaOdMasaDoInfo = createStructureInfo<Otprema2.MasaOdVecaOdMasaDo>(
    'Otprema2/MasaOdVecaOdMasaDo'
  );
  export interface MasaOdVecaOdMasaDo {}

  export const UneseniMasaIVrijednostInfo = createStructureInfo<Otprema2.UneseniMasaIVrijednost>(
    'Otprema2/UneseniMasaIVrijednost'
  );
  export interface UneseniMasaIVrijednost {}

  export const InvalidPosiljkaAdresaSubjektByPrimateljInfo = createStructureInfo<
    Otprema2.InvalidPosiljkaAdresaSubjektByPrimatelj
  >('Otprema2/InvalidPosiljkaAdresaSubjektByPrimatelj');
  export interface InvalidPosiljkaAdresaSubjektByPrimatelj {}

  export const InvalidPosiljkaAdresaLokacijaByPrimateljInfo = createStructureInfo<
    Otprema2.InvalidPosiljkaAdresaLokacijaByPrimatelj
  >('Otprema2/InvalidPosiljkaAdresaLokacijaByPrimatelj');
  export interface InvalidPosiljkaAdresaLokacijaByPrimatelj {}

  export const InvalidVrstaPosiljkePruzateljUslugeInfo = createStructureInfo<
    Otprema2.InvalidVrstaPosiljkePruzateljUsluge
  >('Otprema2/InvalidVrstaPosiljkePruzateljUsluge');
  export interface InvalidVrstaPosiljkePruzateljUsluge {}

  export const InvalidUputaZaOtpremuAdresaSubjektByPrimateljInfo = createStructureInfo<
    Otprema2.InvalidUputaZaOtpremuAdresaSubjektByPrimatelj
  >('Otprema2/InvalidUputaZaOtpremuAdresaSubjektByPrimatelj');
  export interface InvalidUputaZaOtpremuAdresaSubjektByPrimatelj {}

  export const InvalidUputaZaOtpremuAdresaLokacijaByPrimateljInfo = createStructureInfo<
    Otprema2.InvalidUputaZaOtpremuAdresaLokacijaByPrimatelj
  >('Otprema2/InvalidUputaZaOtpremuAdresaLokacijaByPrimatelj');
  export interface InvalidUputaZaOtpremuAdresaLokacijaByPrimatelj {}

  export const SystemRequiredIsUnutarnjiPrometInfo = createStructureInfo<
    Otprema2.SystemRequiredIsUnutarnjiPromet
  >('Otprema2/SystemRequiredIsUnutarnjiPromet');
  export interface SystemRequiredIsUnutarnjiPromet {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumKreiranja
  >('Otprema2/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKreiraoInfo = createStructureInfo<Otprema2.SystemRequiredKreirao>(
    'Otprema2/SystemRequiredKreirao'
  );
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumDostaveInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumDostave
  >('Otprema2/SystemRequiredDatumDostave');
  export interface SystemRequiredDatumDostave {}

  export const SystemRequiredDostavuPotvrdioInfo = createStructureInfo<
    Otprema2.SystemRequiredDostavuPotvrdio
  >('Otprema2/SystemRequiredDostavuPotvrdio');
  export interface SystemRequiredDostavuPotvrdio {}

  export const SystemRequiredDatumIspisaInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumIspisa
  >('Otprema2/SystemRequiredDatumIspisa');
  export interface SystemRequiredDatumIspisa {}

  export const SystemRequiredIspisaoInfo = createStructureInfo<Otprema2.SystemRequiredIspisao>(
    'Otprema2/SystemRequiredIspisao'
  );
  export interface SystemRequiredIspisao {}

  export const SystemRequiredDatumPonistavanjaInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumPonistavanja
  >('Otprema2/SystemRequiredDatumPonistavanja');
  export interface SystemRequiredDatumPonistavanja {}

  export const SystemRequiredPonistioInfo = createStructureInfo<Otprema2.SystemRequiredPonistio>(
    'Otprema2/SystemRequiredPonistio'
  );
  export interface SystemRequiredPonistio {}

  export const SystemRequiredDatumZakljucivanjaInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumZakljucivanja
  >('Otprema2/SystemRequiredDatumZakljucivanja');
  export interface SystemRequiredDatumZakljucivanja {}

  export const SystemRequiredZakljucioInfo = createStructureInfo<Otprema2.SystemRequiredZakljucio>(
    'Otprema2/SystemRequiredZakljucio'
  );
  export interface SystemRequiredZakljucio {}

  export const SystemRequiredDatumUnosaInfo = createStructureInfo<
    Otprema2.SystemRequiredDatumUnosa
  >('Otprema2/SystemRequiredDatumUnosa');
  export interface SystemRequiredDatumUnosa {}

  export const SystemRequiredFTSIDInfo = createStructureInfo<Otprema2.SystemRequiredFTSID>(
    'Otprema2/SystemRequiredFTSID'
  );
  export interface SystemRequiredFTSID {}

  export const SystemRequiredActiveInfo = createStructureInfo<Otprema2.SystemRequiredActive>(
    'Otprema2/SystemRequiredActive'
  );
  export interface SystemRequiredActive {}

  export const SystemRequiredGrupaPrimateljaInfo = createStructureInfo<
    Otprema2.SystemRequiredGrupaPrimatelja
  >('Otprema2/SystemRequiredGrupaPrimatelja');
  export interface SystemRequiredGrupaPrimatelja {}
}

export module PovjerljiviUrudzbeni {
  export const StupanjTajnostiInfo = createStructureInfo<PovjerljiviUrudzbeni.StupanjTajnosti>(
    'PovjerljiviUrudzbeni/StupanjTajnosti'
  );
  export interface StupanjTajnosti {
    ID: string;
    Naziv: string;
    PrefiksKlasePredmeta: string;
    Nivo: number;
  }

  export const StupanjTajnostiLookupInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiLookup
  >('PovjerljiviUrudzbeni/StupanjTajnostiLookup');
  export interface StupanjTajnostiLookup {
    ID: string;
    Naziv?: string;
    Nivo?: number;
  }

  export const DeklasifikacijaPredmetaMoguciStupnjeviTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.DeklasifikacijaPredmetaMoguciStupnjeviTajnosti
  >('PovjerljiviUrudzbeni/DeklasifikacijaPredmetaMoguciStupnjeviTajnosti');
  export interface DeklasifikacijaPredmetaMoguciStupnjeviTajnosti {
    PredmetID?: string;
  }

  export const StupanjTajnostiLookupBezRowPermissionaInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiLookupBezRowPermissiona
  >('PovjerljiviUrudzbeni/StupanjTajnostiLookupBezRowPermissiona');
  export interface StupanjTajnostiLookupBezRowPermissiona {
    ID: string;
    Naziv?: string;
    Nivo?: number;
  }

  export const PismenoPromjenaStupnjaTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PismenoPromjenaStupnjaTajnosti
  >('PovjerljiviUrudzbeni/PismenoPromjenaStupnjaTajnosti');
  export interface PismenoPromjenaStupnjaTajnosti {
    ID: string;
    PismenoID: string;
    StupanjTajnostiID: string;
    VrijemeKreiranja?: Date;
    KorisnikID?: string;
    Napomena?: string;
    TemeljemPismenaID?: string;
  }

  export const StupanjTajnostiPismenaComputedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiPismenaComputed
  >('PovjerljiviUrudzbeni/StupanjTajnostiPismenaComputed');
  export interface StupanjTajnostiPismenaComputed {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const PrilogPromjenaStupnjaTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PrilogPromjenaStupnjaTajnosti
  >('PovjerljiviUrudzbeni/PrilogPromjenaStupnjaTajnosti');
  export interface PrilogPromjenaStupnjaTajnosti {
    ID: string;
    PrilogID: string;
    StupanjTajnostiID: string;
    VrijemeKreiranja?: Date;
    KorisnikID?: string;
    Napomena?: string;
    TemeljemPismenaID?: string;
  }

  export const StupanjTajnostiPredmetaComputedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiPredmetaComputed
  >('PovjerljiviUrudzbeni/StupanjTajnostiPredmetaComputed');
  export interface StupanjTajnostiPredmetaComputed {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const StupanjTajnostiPrilogaComputedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiPrilogaComputed
  >('PovjerljiviUrudzbeni/StupanjTajnostiPrilogaComputed');
  export interface StupanjTajnostiPrilogaComputed {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const PovezaniEntitetPredmetPromjenaStupnjaTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PovezaniEntitetPredmetPromjenaStupnjaTajnosti
  >('PovjerljiviUrudzbeni/PovezaniEntitetPredmetPromjenaStupnjaTajnosti');
  export interface PovezaniEntitetPredmetPromjenaStupnjaTajnosti {
    PovezaniEntitetID?: string;
    PredmetID?: string;
    TemeljemPismenaID?: string;
    Napomena?: string;
    Subtype?: string;
    PismenoPromjenaStupnjaTajnostiID?: string;
    PrilogPromjenaStupnjaTajnostiID?: string;
  }

  export const PredmetPromjenaStupnjaTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PredmetPromjenaStupnjaTajnosti
  >('PovjerljiviUrudzbeni/PredmetPromjenaStupnjaTajnosti');
  export interface PredmetPromjenaStupnjaTajnosti {
    ID: string;
    PredmetID: string;
    StupanjTajnostiID: string;
    KorisnikID?: string;
    VrijemeKreiranja?: Date;
    Napomena?: string;
    TemeljemPovezanogEntitetaID?: string;
  }

  export const DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntitetaInfo = createStructureInfo<
    PovjerljiviUrudzbeni.DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntiteta
  >('PovjerljiviUrudzbeni/DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntiteta');
  export interface DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntiteta {}

  export const ZaposlenikStupanjTajnostiInfo = createStructureInfo<
    PovjerljiviUrudzbeni.ZaposlenikStupanjTajnosti
  >('PovjerljiviUrudzbeni/ZaposlenikStupanjTajnosti');
  export interface ZaposlenikStupanjTajnosti {
    ID: string;
    ZaposlenikID?: string;
    StupanjTajnostiID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    DodijelioID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    Active?: boolean;
  }

  export const ZaposlenikStupanjTajnostiBrowseBaseInfo = createStructureInfo<
    PovjerljiviUrudzbeni.ZaposlenikStupanjTajnostiBrowseBase
  >('PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiBrowseBase');
  export interface ZaposlenikStupanjTajnostiBrowseBase {
    ID: string;
    IsValid?: boolean;
  }

  export const ZaposlenikStupanjTajnostiBrowseInfo = createStructureInfo<
    PovjerljiviUrudzbeni.ZaposlenikStupanjTajnostiBrowse
  >('PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiBrowse');
  export interface ZaposlenikStupanjTajnostiBrowse {
    ID: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    Active?: boolean;
    ZaposlenikID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    StupanjTajnostiNaziv?: string;
    DodijelioNaziv?: string;
    ObrisaoNaziv?: string;
    IsValid?: boolean;
  }

  export const ProvjeraVrijediOdInfo = createStructureInfo<PovjerljiviUrudzbeni.ProvjeraVrijediOd>(
    'PovjerljiviUrudzbeni/ProvjeraVrijediOd'
  );
  export interface ProvjeraVrijediOd {}

  export const ProvjeraVrijediDoInfo = createStructureInfo<PovjerljiviUrudzbeni.ProvjeraVrijediDo>(
    'PovjerljiviUrudzbeni/ProvjeraVrijediDo'
  );
  export interface ProvjeraVrijediDo {}

  export const ZaposlenikStupanjTajnostiForPermissionsInfo = createStructureInfo<
    PovjerljiviUrudzbeni.ZaposlenikStupanjTajnostiForPermissions
  >('PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiForPermissions');
  export interface ZaposlenikStupanjTajnostiForPermissions {
    ID: string;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const PismenoPromjenaStupnjaTajnostiBrowseInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PismenoPromjenaStupnjaTajnostiBrowse
  >('PovjerljiviUrudzbeni/PismenoPromjenaStupnjaTajnostiBrowse');
  export interface PismenoPromjenaStupnjaTajnostiBrowse {
    ID: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PismenoID?: string;
    JeIzmjenaStupnjaTajnostiPredmeta?: boolean;
    PredmetID?: string;
  }

  export const PrilogPromjenaStupnjaTajnostiBrowseInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PrilogPromjenaStupnjaTajnostiBrowse
  >('PovjerljiviUrudzbeni/PrilogPromjenaStupnjaTajnostiBrowse');
  export interface PrilogPromjenaStupnjaTajnostiBrowse {
    ID: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PrilogID?: string;
    JeIzmjenaStupnjaTajnostiPredmeta?: boolean;
    PredmetID?: string;
  }

  export const PredmetPromjenaStupnjaTajnostiBrowseInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PredmetPromjenaStupnjaTajnostiBrowse
  >('PovjerljiviUrudzbeni/PredmetPromjenaStupnjaTajnostiBrowse');
  export interface PredmetPromjenaStupnjaTajnostiBrowse {
    ID: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PredmetID?: string;
    PovezaniEntitetID?: string;
  }

  export const StupanjTajnostiPosiljkeComputedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiPosiljkeComputed
  >('PovjerljiviUrudzbeni/StupanjTajnostiPosiljkeComputed');
  export interface StupanjTajnostiPosiljkeComputed {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const StupanjTajnostiUputeZaOtpremuComputedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.StupanjTajnostiUputeZaOtpremuComputed
  >('PovjerljiviUrudzbeni/StupanjTajnostiUputeZaOtpremuComputed');
  export interface StupanjTajnostiUputeZaOtpremuComputed {
    ID: string;
    StupanjTajnostiID?: string;
  }

  export const PovezaniEntitetPredmetPromjenaStupnjaTajnosti_MaterializedInfo = createStructureInfo<
    PovjerljiviUrudzbeni.PovezaniEntitetPredmetPromjenaStupnjaTajnosti_Materialized
  >('PovjerljiviUrudzbeni/PovezaniEntitetPredmetPromjenaStupnjaTajnosti_Materialized');
  export interface PovezaniEntitetPredmetPromjenaStupnjaTajnosti_Materialized {
    ID: string;
  }

  export const SystemRequiredVrijemeKreiranjaInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredVrijemeKreiranja
  >('PovjerljiviUrudzbeni/SystemRequiredVrijemeKreiranja');
  export interface SystemRequiredVrijemeKreiranja {}

  export const SystemRequiredKorisnikInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredKorisnik
  >('PovjerljiviUrudzbeni/SystemRequiredKorisnik');
  export interface SystemRequiredKorisnik {}

  export const SystemRequiredDodijelioInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredDodijelio
  >('PovjerljiviUrudzbeni/SystemRequiredDodijelio');
  export interface SystemRequiredDodijelio {}

  export const SystemRequiredDatumKreiranjaInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredDatumKreiranja
  >('PovjerljiviUrudzbeni/SystemRequiredDatumKreiranja');
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredActiveInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredActive
  >('PovjerljiviUrudzbeni/SystemRequiredActive');
  export interface SystemRequiredActive {}

  export const SystemRequiredZaposlenikInfo = createStructureInfo<
    PovjerljiviUrudzbeni.SystemRequiredZaposlenik
  >('PovjerljiviUrudzbeni/SystemRequiredZaposlenik');
  export interface SystemRequiredZaposlenik {}
}

export module Reports {}

export module Otprema {}

export module Centrix2ImportPodataka {}

export module PovijestUvida {
  export const PovijestUvidaEntitetaInfo = createStructureInfo<PovijestUvida.PovijestUvidaEntiteta>(
    'PovijestUvida/PovijestUvidaEntiteta'
  );
  export interface PovijestUvidaEntiteta {
    ID: string;
    ZaposlenikID?: string;
    EntitetID: string;
    Datum?: Date;
    Napomena?: string;
  }

  export const PovijestUvidaEntitetaBrowseBaseInfo = createStructureInfo<
    PovijestUvida.PovijestUvidaEntitetaBrowseBase
  >('PovijestUvida/PovijestUvidaEntitetaBrowseBase');
  export interface PovijestUvidaEntitetaBrowseBase {
    ID: string;
    EntitetID?: string;
    Datum?: Date;
    UserName?: string;
    Napomena?: string;
  }

  export const PovijestUvidaEntitetaBrowseInfo = createStructureInfo<
    PovijestUvida.PovijestUvidaEntitetaBrowse
  >('PovijestUvida/PovijestUvidaEntitetaBrowse');
  export interface PovijestUvidaEntitetaBrowse {
    ID: string;
    EntitetID?: string;
    Datum?: Date;
    UserName?: string;
    Napomena?: string;
  }

  export const SystemRequiredZaposlenikInfo = createStructureInfo<
    PovijestUvida.SystemRequiredZaposlenik
  >('PovijestUvida/SystemRequiredZaposlenik');
  export interface SystemRequiredZaposlenik {}

  export const SystemRequiredDatumInfo = createStructureInfo<PovijestUvida.SystemRequiredDatum>(
    'PovijestUvida/SystemRequiredDatum'
  );
  export interface SystemRequiredDatum {}
}

export module ZupIt {
  export const PostupakZupItInfoInfo = createStructureInfo<ZupIt.PostupakZupItInfo>(
    'ZupIt/PostupakZupItInfo'
  );
  export interface PostupakZupItInfo {
    ID: string;
    UlaziUZupIt?: boolean;
  }

  export const PostupakZupItInfo = createStructureInfo<ZupIt.PostupakZupIt>('ZupIt/PostupakZupIt');
  export interface PostupakZupIt {
    ID: string;
  }

  export const PostupakZupItPropertyInfo = createStructureInfo<ZupIt.PostupakZupItProperty>(
    'ZupIt/PostupakZupItProperty'
  );
  export interface PostupakZupItProperty {
    ID: string;
    PostupakZupItID?: string;
    Name?: string;
    Value?: string;
  }

  export const PostupakZupItPropertiesInfo = createStructureInfo<ZupIt.PostupakZupItProperties>(
    'ZupIt/PostupakZupItProperties'
  );
  export interface PostupakZupItProperties {
    Properties?: ZupIt.PostupakZupItProperty[];
    ID?: string;
  }

  export const ChangedSinceParametersInfo = createStructureInfo<ZupIt.ChangedSinceParameters>(
    'ZupIt/ChangedSinceParameters'
  );
  export interface ChangedSinceParameters {
    ChangedSinceTime?: Date;
    CreatedAfterTime?: Date;
    MaxItems?: number;
  }

  export const PostupakInfo = createStructureInfo<ZupIt.Postupak>('ZupIt/Postupak');
  export interface Postupak {
    ID: string;
    PredmetID?: string;
    CreatedTime?: Date;
    LastChangeTime?: Date;
    Name?: string;
    Value?: string;
  }

  export const PostupakLastChangeTimeInfo = createStructureInfo<ZupIt.PostupakLastChangeTime>(
    'ZupIt/PostupakLastChangeTime'
  );
  export interface PostupakLastChangeTime {
    ID: string;
    LastChangeTime?: Date;
  }

  export const ComputePostupakLastChangeTimeInfo = createStructureInfo<
    ZupIt.ComputePostupakLastChangeTime
  >('ZupIt/ComputePostupakLastChangeTime');
  export interface ComputePostupakLastChangeTime {
    ID: string;
    LastChangeTime?: Date;
  }

  export const ZahtjevZaPotvrduZupItInfoInfo = createStructureInfo<ZupIt.ZahtjevZaPotvrduZupItInfo>(
    'ZupIt/ZahtjevZaPotvrduZupItInfo'
  );
  export interface ZahtjevZaPotvrduZupItInfo {
    ID: string;
    UlaziUZupIt?: boolean;
  }

  export const ZahtjevZaPotvrduInfo = createStructureInfo<ZupIt.ZahtjevZaPotvrdu>(
    'ZupIt/ZahtjevZaPotvrdu'
  );
  export interface ZahtjevZaPotvrdu {
    ID: string;
    RijesenTemeljem: boolean;
    DatumIzdavanjaOdbijanja: Date;
    SluzbenaEvidencijaID?: string;
    VrstaPotvrdeID: string;
    IspisivanjemSadrzajaBezObrasca?: boolean;
    PopunjavanjemPropisanogObrasca?: boolean;
    ElektronickaIsprava?: boolean;
    PosebnaIzrada?: boolean;
    IzdanaUZakonskomRoku?: boolean;
  }

  export const ZahtjevZaPotvrduLastChangeTimeInfo = createStructureInfo<
    ZupIt.ZahtjevZaPotvrduLastChangeTime
  >('ZupIt/ZahtjevZaPotvrduLastChangeTime');
  export interface ZahtjevZaPotvrduLastChangeTime {
    ID: string;
    LastChangeTime?: Date;
    SluzbenaEvidencijaID: string;
    VrstaPotvrdeID: string;
    Godina: number;
    Mjesec: number;
  }

  export const ComputeZahtjevZaPotvrduInfo = createStructureInfo<ZupIt.ComputeZahtjevZaPotvrdu>(
    'ZupIt/ComputeZahtjevZaPotvrdu'
  );
  export interface ComputeZahtjevZaPotvrdu {
    ID: string;
    Godina?: number;
    Mjesec?: number;
  }

  export const ZahtjevZaPotvrduPersistedInfo = createStructureInfo<ZupIt.ZahtjevZaPotvrduPersisted>(
    'ZupIt/ZahtjevZaPotvrduPersisted'
  );
  export interface ZahtjevZaPotvrduPersisted {
    ID: string;
    Godina?: number;
    Mjesec?: number;
  }

  export const PotvrdaInfo = createStructureInfo<ZupIt.Potvrda>('ZupIt/Potvrda');
  export interface Potvrda {
    ID: string;
    SluzbenaEvidencijaID?: string;
    VrstaPotvrdeID?: string;
    Godina?: number;
    Mjesec?: number;
    NacinIzdavanjaIspisivanjemSadrzajaBezObrasca?: boolean;
    NacinIzdavanjaPopunjavanjemPropisanogObrasca?: boolean;
    NacinIzdavanjaElektronickaIsprava?: boolean;
    NacinIzdavanjaPosebnaIzrada?: boolean;
    BrojPotvrdaIzdanihIstiDan?: number;
    BrojOdbijenihIstiDan?: number;
    BrojPotvrdaIzdanihUZakonskomRoku?: number;
    BrojPotvrdaIzdanihIzvanZakonskogRoka?: number;
  }

  export const PrigovorZupItInfoInfo = createStructureInfo<ZupIt.PrigovorZupItInfo>(
    'ZupIt/PrigovorZupItInfo'
  );
  export interface PrigovorZupItInfo {
    ID: string;
    UlaziUZupIt?: boolean;
  }

  export const PrigovorZupItInfo = createStructureInfo<ZupIt.PrigovorZupIt>('ZupIt/PrigovorZupIt');
  export interface PrigovorZupIt {
    ID: string;
  }

  export const PrigovorZupItPropertyInfo = createStructureInfo<ZupIt.PrigovorZupItProperty>(
    'ZupIt/PrigovorZupItProperty'
  );
  export interface PrigovorZupItProperty {
    ID: string;
    PrigovorZupItID?: string;
    Name?: string;
    Value?: string;
  }

  export const PrigovorZupItPropertiesInfo = createStructureInfo<ZupIt.PrigovorZupItProperties>(
    'ZupIt/PrigovorZupItProperties'
  );
  export interface PrigovorZupItProperties {
    Properties?: ZupIt.PrigovorZupItProperty[];
    ID?: string;
  }

  export const PrigovorInfo = createStructureInfo<ZupIt.Prigovor>('ZupIt/Prigovor');
  export interface Prigovor {
    ID: string;
    PismenoID?: string;
    CreatedTime?: Date;
    LastChangeTime?: Date;
    Name?: string;
    Value?: string;
  }

  export const PrigovorLastChangeTimeInfo = createStructureInfo<ZupIt.PrigovorLastChangeTime>(
    'ZupIt/PrigovorLastChangeTime'
  );
  export interface PrigovorLastChangeTime {
    ID: string;
    LastChangeTime?: Date;
  }

  export const ComputePrigovorLastChangeTimeInfo = createStructureInfo<
    ZupIt.ComputePrigovorLastChangeTime
  >('ZupIt/ComputePrigovorLastChangeTime');
  export interface ComputePrigovorLastChangeTime {
    ID: string;
    LastChangeTime?: Date;
  }

  export const GetPostupakZupItPropertiesInfo = createStructureInfo<
    ZupIt.GetPostupakZupItProperties
  >('ZupIt/GetPostupakZupItProperties');
  export interface GetPostupakZupItProperties {
    ID?: string;
  }

  export const GetPostupakZupItPropertiesFunctionInfo = createFunctionInfo(
    GetPostupakZupItPropertiesInfo,
    PostupakZupItPropertiesInfo
  );

  export const SavePostupakZupItPropertiesResultInfo = createStructureInfo<
    ZupIt.SavePostupakZupItPropertiesResult
  >('ZupIt/SavePostupakZupItPropertiesResult');
  export interface SavePostupakZupItPropertiesResult {
    ID?: string;
  }

  export const SavePostupakZupItPropertiesInfo = createStructureInfo<
    ZupIt.SavePostupakZupItProperties
  >('ZupIt/SavePostupakZupItProperties');
  export interface SavePostupakZupItProperties {
    Item?: ZupIt.PostupakZupItProperties;
  }

  export const SavePostupakZupItPropertiesFunctionInfo = createFunctionInfo(
    SavePostupakZupItPropertiesInfo,
    SavePostupakZupItPropertiesResultInfo
  );

  export const GetPrigovorZupItPropertiesInfo = createStructureInfo<
    ZupIt.GetPrigovorZupItProperties
  >('ZupIt/GetPrigovorZupItProperties');
  export interface GetPrigovorZupItProperties {
    ID?: string;
  }

  export const GetPrigovorZupItPropertiesFunctionInfo = createFunctionInfo(
    GetPrigovorZupItPropertiesInfo,
    PrigovorZupItPropertiesInfo
  );

  export const SavePrigovorZupItPropertiesResultInfo = createStructureInfo<
    ZupIt.SavePrigovorZupItPropertiesResult
  >('ZupIt/SavePrigovorZupItPropertiesResult');
  export interface SavePrigovorZupItPropertiesResult {
    ID?: string;
  }

  export const SavePrigovorZupItPropertiesInfo = createStructureInfo<
    ZupIt.SavePrigovorZupItProperties
  >('ZupIt/SavePrigovorZupItProperties');
  export interface SavePrigovorZupItProperties {
    Item?: ZupIt.PrigovorZupItProperties;
  }

  export const SavePrigovorZupItPropertiesFunctionInfo = createFunctionInfo(
    SavePrigovorZupItPropertiesInfo,
    SavePrigovorZupItPropertiesResultInfo
  );

  export const NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrduInfo = createStructureInfo<
    ZupIt.NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrdu
  >('ZupIt/NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrdu');
  export interface NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrdu {}

  export const SystemRequiredLastChangeTimeInfo = createStructureInfo<
    ZupIt.SystemRequiredLastChangeTime
  >('ZupIt/SystemRequiredLastChangeTime');
  export interface SystemRequiredLastChangeTime {}

  export const SystemRequiredSluzbenaEvidencijaIDInfo = createStructureInfo<
    ZupIt.SystemRequiredSluzbenaEvidencijaID
  >('ZupIt/SystemRequiredSluzbenaEvidencijaID');
  export interface SystemRequiredSluzbenaEvidencijaID {}

  export const SystemRequiredPostupakZupItInfo = createStructureInfo<
    ZupIt.SystemRequiredPostupakZupIt
  >('ZupIt/SystemRequiredPostupakZupIt');
  export interface SystemRequiredPostupakZupIt {}

  export const SystemRequiredPrigovorZupItInfo = createStructureInfo<
    ZupIt.SystemRequiredPrigovorZupIt
  >('ZupIt/SystemRequiredPrigovorZupIt');
  export interface SystemRequiredPrigovorZupIt {}
}
